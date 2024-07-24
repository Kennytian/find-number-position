import { createHash } from 'node:crypto';
import { networkInterfaces } from 'node:os';
import { cpu, mem, os } from 'node-os-utils';

export function getMachineId() {
  const macAddress = networkInterfaces()['en0']?.find((item) => item.family !== 'IPv4')?.mac || '';
  const deviceInfo = {
    cpuCount: cpu.count(),
    cpuModel: cpu.model(),
    memTotal: mem.totalMem(),
    macAddress,
    osArch: os.arch(),
    osHostname: os.hostname(),
    // The value will be changed when the IP changes
    // osIp: os.ip(),
    osPlatform: os.platform(),
  };

  const hash = createHash('sha256');
  const deviceInfoString = JSON.stringify(deviceInfo);
  hash.update(deviceInfoString);

  return hash.digest('hex');
}
