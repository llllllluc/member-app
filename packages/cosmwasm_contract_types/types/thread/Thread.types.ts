/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.35.3.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */

export type Uint64 = string
export type Uint128 = string
export interface InstantiateMsg {
  admin_addr?: string | null
  default_ask_fee_percentage_of_membership?: Uint64 | null
  default_ask_fee_to_thread_creator_percentage_of_membership?: Uint64 | null
  default_reply_fee_percentage_of_membership?: Uint64 | null
  default_reply_fee_to_thread_creator_percentage_of_membership?: Uint64 | null
  default_share_to_all_members_percentage?: Uint64 | null
  default_share_to_issuer_percentage?: Uint64 | null
  max_number_of_thread_labels?: Uint64 | null
  max_thread_description_length?: Uint64 | null
  max_thread_label_length?: Uint64 | null
  max_thread_msg_length?: Uint64 | null
  max_thread_title_length?: Uint64 | null
  member_contract_addr: string
  protocol_fee_ask_in_thread_fee_percentage?: Uint64 | null
  protocol_fee_collector_addr?: string | null
  protocol_fee_reply_in_thread_fee_percentage?: Uint64 | null
  protocol_fee_start_new_thread_fixed_cost?: Uint128 | null
}
export type ExecuteMsg =
  | {
      enable: EnableMsg
    }
  | {
      disable: DisableMsg
    }
  | {
      update_config: UpdateConfigMsg
    }
  | {
      update_user_config: UpdateUserConfigMsg
    }
  | {
      start_new_thread: StartNewThreadMsg
    }
  | {
      ask_in_thread: AskInThreadMsg
    }
  | {
      answer_in_thread: AnswerInThreadMsg
    }
  | {
      reply_in_thread: ReplyInThreadMsg
    }
export interface EnableMsg {}
export interface DisableMsg {}
export interface UpdateConfigMsg {
  admin_addr?: string | null
  default_ask_fee_percentage_of_membership?: Uint64 | null
  default_ask_fee_to_thread_creator_percentage_of_membership?: Uint64 | null
  default_reply_fee_percentage_of_membership?: Uint64 | null
  default_reply_fee_to_thread_creator_percentage_of_membership?: Uint64 | null
  default_share_to_all_members_percentage?: Uint64 | null
  default_share_to_issuer_percentage?: Uint64 | null
  max_number_of_thread_labels?: Uint64 | null
  max_thread_description_length?: Uint64 | null
  max_thread_label_length?: Uint64 | null
  max_thread_msg_length?: Uint64 | null
  max_thread_title_length?: Uint64 | null
  member_contract_addr?: string | null
  protocol_fee_ask_in_thread_fee_percentage?: Uint64 | null
  protocol_fee_collector_addr?: string | null
  protocol_fee_reply_in_thread_fee_percentage?: Uint64 | null
  protocol_fee_start_new_thread_fixed_cost?: Uint128 | null
}
export interface UpdateUserConfigMsg {
  ask_fee_percentage_of_membership?: Uint64 | null
  ask_fee_to_thread_creator_percentage_of_membership?: Uint64 | null
  reply_fee_percentage_of_membership?: Uint64 | null
  reply_fee_to_thread_creator_percentage_of_membership?: Uint64 | null
  share_to_all_members_percentage?: Uint64 | null
  share_to_issuer_percentage?: Uint64 | null
  user_id: Uint64
}
export interface StartNewThreadMsg {
  description: string
  labels: string[]
  title: string
}
export interface AskInThreadMsg {
  ask_to_user_id: Uint64
  content: string
  start_new_thread?: boolean | null
  thread_description?: string | null
  thread_id?: Uint64 | null
  thread_labels?: string[] | null
  thread_title?: string | null
}
export interface AnswerInThreadMsg {
  content: string
  question_id: Uint64
  thread_id: Uint64
}
export interface ReplyInThreadMsg {
  content: string
  reply_to_thread_msg_id?: Uint64 | null
  thread_id: Uint64
}
export type QueryMsg =
  | {
      query_config: QueryConfigMsg
    }
  | {
      query_user_config: QueryUserConfigMsg
    }
  | {
      query_cost_to_start_new_thread: QueryCostToStartNewThreadMsg
    }
  | {
      query_cost_to_ask_in_thread: QueryCostToAskInThreadMsg
    }
  | {
      query_cost_to_reply_in_thread: QueryCostToReplyInThreadMsg
    }
  | {
      query_i_ds_of_all_threads_user_participated: QueryIDsOfAllThreadsUserParticipatedMsg
    }
  | {
      query_i_ds_of_all_threads_user_created: QueryIDsOfAllThreadsUserCreatedMsg
    }
  | {
      query_i_ds_of_all_thread_msgs_in_thread: QueryIDsOfAllThreadMsgsInThreadMsg
    }
  | {
      query_threads_by_i_ds: QueryThreadsByIDsMsg
    }
  | {
      query_thread_msgs_by_i_ds: QueryThreadMsgsByIDsMsg
    }
export interface QueryConfigMsg {}
export interface QueryUserConfigMsg {
  user_id: Uint64
}
export interface QueryCostToStartNewThreadMsg {
  description_len: Uint64
}
export interface QueryCostToAskInThreadMsg {
  ask_to_user_id: Uint64
  asker_user_id: Uint64
  content_len: Uint64
  thread_creator_user_id: Uint64
}
export interface QueryCostToReplyInThreadMsg {
  content_len: Uint64
  replier_user_id: Uint64
  reply_to_user_id: Uint64
  thread_creator_user_id: Uint64
}
export interface QueryIDsOfAllThreadsUserParticipatedMsg {
  include_start_after?: boolean | null
  limit?: number | null
  start_after_thread_id?: Uint64 | null
  user_id: Uint64
}
export interface QueryIDsOfAllThreadsUserCreatedMsg {
  include_start_after?: boolean | null
  limit?: number | null
  start_after_thread_id?: Uint64 | null
  user_id: Uint64
}
export interface QueryIDsOfAllThreadMsgsInThreadMsg {
  include_start_after?: boolean | null
  limit?: number | null
  start_after_thread_msg_id?: Uint64 | null
  thread_id: Uint64
}
export interface QueryThreadsByIDsMsg {
  thread_ids: Uint64[]
}
export interface QueryThreadMsgsByIDsMsg {
  thread_and_thread_msg_ids: [Uint64, Uint64][]
}
export type Addr = string
export interface ConfigResponse {
  config: Config
}
export interface Config {
  admin_addr: Addr
  default_fee_config: FeeConfig
  default_fee_share_config: FeeShareConfig
  enabled: boolean
  member_contract_addr: Addr
  protocol_fee_collector_addr: Addr
  protocol_fee_config: ProtocolFeeConfig
  thread_config: ThreadConfig
}
export interface FeeConfig {
  ask_fee_percentage_of_membership: Uint64
  ask_fee_to_thread_creator_percentage_of_membership: Uint64
  reply_fee_percentage_of_membership: Uint64
  reply_fee_to_thread_creator_percentage_of_membership: Uint64
}
export interface FeeShareConfig {
  share_to_all_members_percentage: Uint64
  share_to_issuer_percentage: Uint64
}
export interface ProtocolFeeConfig {
  ask_in_thread_fee_percentage: Uint64
  reply_in_thread_fee_percentage: Uint64
  start_new_thread_fixed_cost: Uint128
}
export interface ThreadConfig {
  max_number_of_thread_labels: Uint64
  max_thread_description_length: Uint64
  max_thread_label_length: Uint64
  max_thread_msg_length: Uint64
  max_thread_title_length: Uint64
}
export interface CostToAskInThreadResponse {
  ask_to_membership_all_members_fee: Uint128
  ask_to_membership_issuer_fee: Uint128
  protocol_fee: Uint128
  thread_creator_membership_all_members_fee: Uint128
  thread_creator_membership_issuer_fee: Uint128
  total_needed_from_user: Uint128
}
export interface CostToReplyInThreadResponse {
  protocol_fee: Uint128
  reply_to_membership_all_members_fee: Uint128
  reply_to_membership_issuer_fee: Uint128
  thread_creator_membership_all_members_fee: Uint128
  thread_creator_membership_issuer_fee: Uint128
  total_needed_from_user: Uint128
}
export interface CostToStartNewThreadResponse {
  protocol_fee: Uint128
}
export interface IDsOfAllThreadMsgsInThreadResponse {
  count: number
  thread_msg_ids: Uint64[]
  total_count: number
}
export interface IDsOfAllThreadsUserCreatedResponse {
  count: number
  thread_ids: Uint64[]
  total_count: number
}
export interface IDsOfAllThreadsUserParticipatedResponse {
  count: number
  thread_ids: Uint64[]
  total_count: number
}
export type ThreadMsg =
  | {
      thread_question_msg: ThreadQuestionMsg
    }
  | {
      thread_answer_msg: ThreadAnswerMsg
    }
  | {
      thread_reply_msg: ThreadReplyMsg
    }
export interface ThreadMsgsResponse {
  thread_msgs: ThreadMsg[]
}
export interface ThreadQuestionMsg {
  asked_to_user_id: Uint64
  content: string
  creator_user_id: Uint64
  id: Uint64
  thread_id: Uint64
}
export interface ThreadAnswerMsg {
  answered_to_question_msg_id: Uint64
  content: string
  creator_user_id: Uint64
  id: Uint64
  thread_id: Uint64
}
export interface ThreadReplyMsg {
  content: string
  creator_user_id: Uint64
  id: Uint64
  reply_to_thread_msg_id?: Uint64 | null
  thread_id: Uint64
}
export interface ThreadsResponse {
  threads: Thread[]
}
export interface Thread {
  creator_user_id: Uint64
  deletable: boolean
  description: string
  id: Uint64
  labels: string[]
  title: string
  updatable: boolean
}
export interface UserConfigResponse {
  user_config: UserConfig
}
export interface UserConfig {
  fee_config?: FeeConfig | null
  fee_share_config?: FeeShareConfig | null
}
