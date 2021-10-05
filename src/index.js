const SQSService = require('./sqs-client');
const config = require('./config.json');

const { setScrollingText, setDisplayBoard } = require('./led-matrix');

const onPageLoad = () => {
  if (config.initMessage) {
    setDisplayBoard(config.initMessage);
  }

  const pubsubService = new SQSService(config.sqs);

  pubsubService.subscribe(sendMessage);
};

function sendMessage(message) {
  const { duration } = message.userMetadata;
  setDisplayBoard(message.message);
}

global.onPageLoad = onPageLoad;
global.setScrollingText = setScrollingText;
