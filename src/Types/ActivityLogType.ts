export type LogActivityOperation =
  | LogActivityOperationCodeUsers
  | LogActivityOperationCodeDistributions
  | LogActivityOperationCodeGroups
  | LogActivityOperationCodeResources;

export interface ActivityLogType {
  id: string;
  loginId: string;
  loginDisplayName: string;
  operationCode: LogActivityOperation;
  operationModule: LogActivityModule;
  operationEntityId: string;
  operationEntityDisplayName: string;
  operationEntityId2?: string;
  operationEntityDisplayName2?: string;
  date: Date;
}

export enum LogActivityOperationCodeUsers {
  USER_ADD = "USER_ADD",
  USER_MODIFY = "USER_MODIFY",
  USER_DELETE = "USER_DELETE",
  USER_DISABLE = "USER_DISABLE",
  USER_ENABLE = "USER_ENABLE",
  USER_ADD_TO_GROUP = "USER_ADD_TO_GROUP",
  USER_REMOVE_FROM_GROUP = "USER_REMOVE_FROM_GROUP",
  USER_ADD_MAILBOX = "USER_ADD_MAILBOX",
  USER_REMOVE_MAILBOX = "USER_REMOVE_MAILBOX",
  USER_SET_NEW_PASSWORD = "USER_SET_NEW_PASSWORD",
  USER_SET_NEW_DEFAULT_EMAIL = "USER_SET_NEW_DEFAULT_EMAIL",
  USER_DELEGATION_FULL_ACCESS_ADD = "USER_DELEGATION_FULL_ACCESS_ADD",
  USER_DELEGATION_FULL_ACCESS_REMOVE = "USER_DELEGATION_FULL_ACCESS_REMOVE",
  USER_DELEGATION_SEND_AS_ADD = "USER_DELEGATION_SEND_AS_ADD",
  USER_DELEGATION_SEND_AS_REMOVE = "USER_DELEGATION_SEND_AS_REMOVE",
  USER_DELEGATION_BEHALF_OF_ADD = "USER_DELEGATION_BEHALF_OF_ADD",
  USER_DELEGATION_BEHALF_OF_REMOVE = "USER_DELEGATION_BEHALF_OF_REMOVE",
}

export enum LogActivityOperationCodeGroups {
  GROUP_ADD = "GROUP_ADD",
  GROUP_MODIFY = "GROUP_MODIFY",
  GROUP_DELETE = "GROUP_DELETE",
  GROUP_MEMBER_ADD = "GROUP_MEMBER_ADD",
  GROUP_MEMBER_REMOVE = "GROUP_MEMBER_REMOVE",
}

export enum LogActivityOperationCodeDistributions {
  DISTRIBUTION_ADD = "DISTRIBUTION_ADD",
  DISTRIBUTION_MODIFY = "DISTRIBUTION_MODIFY",
  DISTRIBUTION_DELETE = "DISTRIBUTION_DELETE",
  DISTRIBUTION_MEMBER_ADD = "DISTRIBUTION_MEMBER_ADD",
  DISTRIBUTION_MEMBER_REMOVE = "DISTRIBUTION_MEMBER_REMOVE",
  DISTRIBUTION_SET_NEW_DEFAULT_EMAIL = "DISTRIBUTION_SET_NEW_DEFAULT_EMAIL",
}

export enum LogActivityOperationCodeResources {
  RESOURCE_ADD = "RESOURCE_ADD",
  RESOURCE_MODIFY = "RESOURCE_MODIFY",
  RESOURCE_DELETE = "RESOURCE_DELETE",
  RESOURCE_MEMBER_ADD = "RESOURCE_MEMBER_ADD",
  RESOURCE_MEMBER_REMOVE = "RESOURCE_MEMBER_REMOVE",
  RESOURCE_SET_NEW_DEFAULT_EMAIL = "RESOURCE_SET_NEW_DEFAULT_EMAIL",
}
export enum LogActivityModule {
  USER = "USER",
  GROUP = "GROUP",
  DISTRIBUTION = "DISTRIBUTION",
  RESOURCE = "RESOURCE",
}
