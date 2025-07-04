import { datadogRum } from '@datadog/browser-rum'
import { reactPlugin } from '@datadog/browser-rum-react'


datadogRum.init({
    applicationId: '3de1186f-a7bb-4e48-b171-6d1e92c94b64',
    clientToken: 'pubeb9dfb7b2f593dfbc00c38ae43f41140',
    site: 'datadoghq.eu',
    service:'usscp-test-1',
    env: 'test',
    // Specify a version number to identify the deployed version of your application in Datadog
    // version: '1.0.0',
    sessionSampleRate:  100,
    sessionReplaySampleRate: 100,
    defaultPrivacyLevel: 'mask-user-input',
    plugins: [reactPlugin({ router: true })],
  });