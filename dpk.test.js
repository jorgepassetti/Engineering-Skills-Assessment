const { deterministicPartitionKey } = require('./dpk');
const crypto = require('crypto');

describe('deterministicPartitionKey', () => {
  it('should return trivial partition key if event is not passed', () => {
    expect(deterministicPartitionKey()).toBe('0');
  });

  it('should return partitionKey if it is present in event', () => {
    expect(deterministicPartitionKey({ partitionKey: 'partitionKey' })).toBe(
      'partitionKey',
    );
  });

  it('should return digest of event if partitionKey is not present in event', () => {
    expect(deterministicPartitionKey({ data: 'data' })).toBe(
      crypto
        .createHash('sha3-512')
        .update(JSON.stringify({ data: 'data' }))
        .digest('hex'),
    );
  });

  it('should return digest of partitionKey if its length is greater than max partition key length', () => {
    expect(deterministicPartitionKey({ partitionKey: 'a'.repeat(257) })).toBe(
      crypto.createHash('sha3-512').update('a'.repeat(257)).digest('hex'),
    );
  });
});
