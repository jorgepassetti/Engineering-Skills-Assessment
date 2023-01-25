const crypto = require('crypto');

const createHash = (string) => {
  return crypto.createHash('sha3-512').update(string).digest('hex');
};

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = '0';
  const MAX_PARTITION_KEY_LENGTH = 256;

  if (!event) {
    return TRIVIAL_PARTITION_KEY;
  }

  let partitionKey = event.partitionKey || JSON.stringify(event);

  if (typeof partitionKey !== 'string') {
    partitionKey = JSON.stringify(partitionKey);
  }

  if (!event.partitionKey) {
    partitionKey = createHash(partitionKey);
  }

  if (partitionKey.length > MAX_PARTITION_KEY_LENGTH) {
    partitionKey = createHash(partitionKey);
  }

  return partitionKey;
};
