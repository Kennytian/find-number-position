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
    osIp: os.ip(),
    osPlatform: os.platform(),
  };

  const hash = createHash('sha256');
  hash.update(JSON.stringify(deviceInfo));

  return hash.digest('hex');
}
