const Rails61 = {
  "Front End": [
    {
      identifier: "yarn",
      label: "Use Yarn",
      options: [
        { name: "Yes (Default)", value: "" },
        { name: "No", value: "--skip-yarn" }
      ]
    },
    {
      identifier: "sprockets",
      label: "Use Sprockets",
      options: [
        { name: "Yes (Default)", value: "" },
        { name: "No", value: "--skip-sprockets" }
      ]
    },
    {
      identifier: "javascript",
      label: "Use Javscript",
      options: [
        { name: "Yes (Default)", value: "" },
        { name: "No", value: "--skip-javascript" }
      ]
    },
    {
      identifier: "turbolinks",
      label: "Use Turbolinks",
      options: [
        { name: "Yes (Default)", value: "" },
        { name: "No", value: "--skip-turbolinks" }
      ]
    },
    {
      identifier: "jbuilder",
      label: "Use JBuilder",
      options: [
        { name: "Yes (Default)", value: "" },
        { name: "No", value: "--skip-jbuilder" }
      ]
    },
    {
      identifier: "webpacker",
      label: "Webpack framework",
      options: [
        { name: "None, just webpack (Default)", value: "" },
        { name: "react", value: "--webpack=react" },
        { name: "vue", value: "--webpack=vue" },
        { name: "angular", value: "--webpack=angular" },
        { name: "elm", value: "--webpack=elm" },
        { name: "stimulus", value: "--webpack=stimulus" }
      ]
    },
    {
      identifier: "webpackinstall",
      label: "Run Webpack install",
      options: [
        { name: "Yes (Default)", value: "" },
        { name: "No", value: "--skip-webpack-install" }
      ]
    }
  ],
  "Components": [
    {
      identifier: "actionmailer",
      label: "Use Action Mailer",
      options: [
        { name: "Yes (Default)", value: "" },
        { name: "No", value: "--skip-action-mailer" }
      ]
    },
    {
      identifier: "activerecord",
      label: "Use Active Record",
      options: [
        { name: "Yes (Default)", value: "" },
        { name: "No", value: "--skip-active-record" }
      ]
    },
    {
      identifier: "actionstorage",
      label: "Use Action Storage",
      options: [
        { name: "Yes (Default)", value: "" },
        { name: "No", value: "--skip-action-storage" }
      ]
    },
    {
      identifier: "activestorage",
      label: "Use Active Storage",
      options: [
        { name: "Yes (Default)", value: "" },
        { name: "No", value: "--skip-active-storage" }
      ]
    },
    {
      identifier: "actionmailbox",
      label: "Use Action Mailbox",
      options: [
        { name: "Yes (Default)", value: "" },
        { name: "No", value: "--skip-action-mailbox" }
      ]
    },
    {
      identifier: "actiontext",
      label: "Use Action Text",
      options: [
        { name: "Yes (Default)", value: "" },
        { name: "No", value: "--skip-action-text" }
      ]
    },
    {
      identifier: "actioncable",
      label: "Use Action Cable",
      options: [
        { name: "Yes (Default)", value: "" },
        { name: "No", value: "--skip-action-cable" }
      ]
    },
    {
      identifier: "spring",
      label: "Spring application preloader",
      options: [
        { name: "Yes (Default)", value: "" },
        { name: "No", value: "--skip-spring" }
      ]
    },
    {
      identifier: "listen",
      label: "Use listen gem integration",
      options: [
        { name: "Yes (Default)", value: "" },
        { name: "No", value: "--skip-listen" }
      ]
    },
    {
      identifier: "minimal",
      label: "Preconfigure a minimal app",
      options: [
        { name: "No (Default)", value: "" },
        { name: "Yes", value: "--minimal" }
      ]
    },
    {
      identifier: "api",
      label: "Is this an API app",
      options: [
        { name: "No (Default)", value: "" },
        { name: "Yes", value: "--api" }
      ]
    }
  ],
  "Other": [
    {
      identifier: "database",
      label: "Which database to use",
      options: [
        { name: "sqlite3 (Default)", value: "" },
        { name: "postgresql", value: "--database=postgresql" },
        { name: "mysql", value: "--database=mysql" },
        { name: "oracle", value: "--database=oracle" },
        { name: "frontbase", value: "--database=frontbase" },
        { name: "ibm_db", value: "--database=ibm_db" },
        { name: "sqlserver", value: "--database=sqlserver" },
        { name: "jdbcmysql", value: "--database=jdbcmysql" },
        { name: "jdbcsqlite3", value: "--database=jdbcsqlite3" },
        { name: "jdbcpostgresql", value: "--database=jdbcpostgresql" },
        { name: "jdbc", value: "--database=jdbc" }
      ]
    },
    {
      identifier: "gemfile",
      label: "Create a Gemfile",
      options: [
        { name: "Yes (Default)", value: "" },
        { name: "No", value: "--skip-gemfile" }
      ]
    },
    {
      identifier: "gitignore",
      label: "Create .gitignore file",
      options: [
        { name: "Yes (Default)", value: "" },
        { name: "No", value: "--skip-git" }
      ]
    },
    {
      identifier: "keepfiles",
      label: "Use source control .keep file",
      options: [
        { name: "Yes (Default)", value: "" },
        { name: "No", value: "--skip-keeps" }
      ]
    },
    {
      identifier: "puma",
      label: "Use puma for the webserver",
      options: [
        { name: "Yes (Default)", value: "" },
        { name: "No", value: "--skip-puma" }
      ]
    },
    {
      identifier: "bootsnap",
      label: "Enable bootsnap gem",
      options: [
        { name: "Yes (Default)", value: "" },
        { name: "No", value: "--skip-bootsnap" }
      ]
    },
    {
      identifier: "bundle",
      label: "Run bundle install",
      options: [
        { name: "Yes (Default)", value: "" },
        { name: "No", value: "--skip-bundle" }
      ]
    },
    {
      identifier: "tests",
      label: "Enable MiniTest",
      options: [
        { name: "Yes (Default)", value: "" },
        { name: "No", value: "--skip-test" }
      ]
    },
    {
      identifier: "systemtests",
      label: "Use system tests",
      options: [
        { name: "Yes (Default)", value: "" },
        { name: "No", value: "--skip-system-test" }
      ]
    }
  ],
  "Runtime": [
    {
      identifier: "force",
      label: "Overwrite existing files",
      options: [
        { name: "No (Default)", value: "" },
        { name: "Yes", value: "--force" }
      ]
    },
    {
      identifier: "pretend",
      label: "Dryrun",
      options: [
        { name: "No (Default)", value: "" },
        { name: "Yes", value: "--pretend" }
      ]
    },
    {
      identifier: "quiet",
      label: "Suppress status output",
      options: [
        { name: "No (Default)", value: "" },
        { name: "Yes", value: "--quiet" }
      ]
    },
    {
      identifier: "skip",
      label: "Skip files that already exist",
      options: [
        { name: "No (Default)", value: "" },
        { name: "Yes", value: "--skip" }
      ]
    },
    {
      identifier: "skip-collision-check",
      label: "Skip collision check",
      options: [
        { name: "No (Default)", value: "" },
        { name: "Yes", value: "--skip-collision-check" }
      ]
    }
  ]
};

export default Rails61;
