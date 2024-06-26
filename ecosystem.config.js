module.exports = {
  apps: [
    {
      name: 'banggooso-external-sites',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 8080',
      instances: '2',
      exec_interpreter: 'bash',
      exec_mode: 'cluster',
      wait_ready: true,
      listen_timeout: 10000,
      kill_timeout: 10000,
      error_file: './logs/pm2-error.log',
      out_file: './logs/pm2-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      time: true,
    },
  ],
};
