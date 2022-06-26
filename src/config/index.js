const config = {
  bookmarks_api: 'https://bookmarks.nicholasgriffin.dev/graphql',
  posthog_key: 'phc_WjI76KM3R6cGiQjsHaZkTlkJ9LSjjRD8Ihb66HYqQ8s',
  sentry_dsn:
    'https://3f628f47345d4f5e8c87f90d842b8c36@o981760.ingest.sentry.io/5936226',
  aws_project_region: 'eu-west-1',
  dynamodb_accessKey: process.env.DYNAMODB_ACCESS_KEY,
  dynamodb_secretKey: process.env.DYNAMODB_SECRET_KEY,
  dynamodb_region: process.env.DYNAMODB_REGION,
  dynamodb_tableName: process.env.DYNAMODB_TABLE_NAME,
  aws_project_region: 'eu-west-2',
  aws_dynamodb_all_tables_region: 'eu-west-2',
  aws_dynamodb_table_schemas: [
    {
      tableName: 'ngwebdb-dev',
      region: 'eu-west-2',
    },
  ],
  aws_user_files_s3_bucket: 'ngwebassets212830-dev',
  aws_user_files_s3_bucket_region: 'eu-west-2',
  aws_cognito_identity_pool_id:
    'eu-west-2:efb6ccc3-9a5d-44f6-bfa6-d0bd75164206',
  aws_cognito_region: 'eu-west-2',
  aws_user_pools_id: 'eu-west-2_QgSyse9od',
  aws_user_pools_web_client_id: '5938oqj32qb50u60mfjimvkpdd',
  oauth: {},
  aws_cognito_username_attributes: ['EMAIL'],
  aws_cognito_social_providers: [],
  aws_cognito_signup_attributes: ['EMAIL'],
  aws_cognito_mfa_configuration: 'OPTIONAL',
  aws_cognito_mfa_types: ['TOTP'],
  aws_cognito_password_protection_settings: {
    passwordPolicyMinLength: '8',
    passwordPolicyCharacters: [
      'REQUIRES_LOWERCASE',
      'REQUIRES_UPPERCASE',
      'REQUIRES_NUMBERS',
      'REQUIRES_SYMBOLS',
    ],
  },
  aws_cognito_verification_mechanisms: ['EMAIL'],
  aws_cloud_logic_custom: [
    {
      name: 'AdminQueries',
      endpoint: 'https://m5kznff417.execute-api.eu-west-2.amazonaws.com/dev',
      region: 'eu-west-2',
    },
  ],
};

export default config;
