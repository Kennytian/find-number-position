import { getMachineId } from '../src/hardware';

describe('run all test for hardware.ts', () => {
  it('should return a string', () => {
    const machineId = getMachineId();
    expect(typeof machineId).toBe('string');
  });

  it('should be a valid SHA256 hash', () => {
    const machineId = getMachineId();
    expect(machineId).toMatch(/^[0-9a-f]{64}$/i);
  });
});
