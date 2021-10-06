const SQSService = require('./sqs-client');
const config = require('./config.json');

const {
  setScrollingText,
  setDisplayBoard,
  setInitMessage,
  displayTimer,
  startTimer,
} = require('./led-matrix');

const onPageLoad = () => {
  startTimer();

  if (config.initMessage) {
    setInitMessage(config.initMessage);
  } else {
    displayTimer();
  }

  const pubsubService = new SQSService(config.sqs);

  pubsubService.subscribe(sendMessage);
};

function sendMessage(message) {
  const { duration, repeat } = message.userMetadata;
  setDisplayBoard(message.message, duration, repeat);
}

global.onPageLoad = onPageLoad;
global.setScrollingText = setScrollingText;
