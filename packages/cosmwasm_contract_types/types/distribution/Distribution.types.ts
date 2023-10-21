/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.35.3.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */

export type Uint64 = string;
export interface InstantiateMsg {
  admin_addr?: string | null;
  default_membership_trading_fee_membership_holder_fee_percentage?: Uint64 | null;
  default_membership_trading_fee_membership_issuer_fee_percentage?: Uint64 | null;
  default_trading_fee_percentage_of_membership?: Uint64 | null;
  fee_denom?: string | null;
  protocol_fee_collector_addr?: string | null;
  protocol_fee_membership_trading_fee_percentage?: Uint64 | null;
  registration_admin_addr?: string | null;
}
export type ExecuteMsg =
  | {
      enable: EnableMsg;
    }
  | {
      disable: DisableMsg;
    }
  | {
      enable_open_registration: EnableOpenRegistrationMsg;
    }
  | {
      disable_open_registration: DisableOpenRegistrationMsg;
    }
  | {
      update_config: UpdateConfigMsg;
    }
  | {
      register: RegisterMsg;
    }
  | {
      link_social_media: LinkSocialMediaMsg;
    }
  | {
      enable_membership: EnableMembershipMsg;
    }
  | {
      update_user_config: UpdateUserConfigMsg;
    }
  | {
      buy_membership: BuyMembershipMsg;
    }
  | {
      sell_membership: SellMembershipMsg;
    };
export type Uint128 = string;
export interface EnableMsg {}
export interface DisableMsg {}
export interface EnableOpenRegistrationMsg {}
export interface DisableOpenRegistrationMsg {}
export interface UpdateConfigMsg {
  admin_addr?: string | null;
  default_share_to_all_members_percentage?: Uint64 | null;
  default_share_to_issuer_percentage?: Uint64 | null;
  default_trading_fee_percentage_of_membership?: Uint64 | null;
  distribution_contract_addr?: string | null;
  protocol_fee_collector_addr?: string | null;
  protocol_fee_membership_trading_fee_percentage?: Uint64 | null;
  registration_admin_addr?: string | null;
}
export interface RegisterMsg {}
export interface LinkSocialMediaMsg {
  social_media_handle: string;
  user_id: Uint64;
}
export interface EnableMembershipMsg {
  user_id: Uint64;
}
export interface UpdateUserConfigMsg {
  share_to_all_members_percentage?: Uint64 | null;
  share_to_issuer_percentage?: Uint64 | null;
  trading_fee_percentage_of_membership?: Uint64 | null;
  user_id: Uint64;
}
export interface BuyMembershipMsg {
  amount: Uint128;
  membership_issuer_user_id: Uint64;
}
export interface SellMembershipMsg {
  amount: Uint128;
  membership_issuer_user_id: Uint64;
}
export type QueryMsg =
  | {
      query_config: QueryConfigMsg;
    }
  | {
      query_user_by_addr: QueryUserByAddrMsg;
    }
  | {
      query_user_by_i_d: QueryUserByIDMsg;
    }
  | {
      query_users_paginated_by_addr: QueryUsersPaginatedByAddrMsg;
    }
  | {
      query_users_paginated_by_i_d: QueryUsersPaginatedByIDMsg;
    }
  | {
      query_membership_supply: QueryMembershipSupplyMsg;
    }
  | {
      query_member_count: QueryMemberCountMsg;
    }
  | {
      query_is_member: QueryIsMemberMsg;
    }
  | {
      query_members: QueryMembersMsg;
    }
  | {
      query_memberships: QueryMembershipsMsg;
    }
  | {
      query_cost_to_buy_membership: QueryCostToBuyMembershipMsg;
    }
  | {
      query_cost_to_sell_membership: QueryCostToSellMembershipMsg;
    };
export interface QueryConfigMsg {}
export interface QueryUserByAddrMsg {
  user_addr: string;
}
export interface QueryUserByIDMsg {
  user_id: Uint64;
}
export interface QueryUsersPaginatedByAddrMsg {
  include_start_after?: boolean | null;
  limit?: number | null;
  start_after_user_addr?: string | null;
}
export interface QueryUsersPaginatedByIDMsg {
  include_start_after?: boolean | null;
  limit?: number | null;
  start_after_user_id?: Uint64 | null;
}
export interface QueryMembershipSupplyMsg {
  membership_issuer_user_id: Uint64;
}
export interface QueryMemberCountMsg {
  membership_issuer_user_id: Uint64;
}
export interface QueryIsMemberMsg {
  membership_issuer_user_id: Uint64;
  user_id: Uint64;
}
export interface QueryMembersMsg {
  include_start_after?: boolean | null;
  limit?: number | null;
  membership_issuer_user_id: Uint64;
  start_after_member_user_id?: Uint64 | null;
}
export interface QueryMembershipsMsg {
  include_start_after?: boolean | null;
  limit?: number | null;
  start_after_membership_issuer_user_id?: Uint64 | null;
  user_id: Uint64;
}
export interface QueryCostToBuyMembershipMsg {
  amount: Uint128;
  membership_issuer_user_id: Uint64;
}
export interface QueryCostToSellMembershipMsg {
  amount: Uint128;
  membership_issuer_user_id: Uint64;
}
export type Addr = string;
export interface ConfigResponse {
  config: Config;
}
export interface Config {
  admin_addr: Addr;
  default_fee_config: FeeConfig;
  default_fee_share_config: FeeShareConfig;
  distribution_contract_addr?: Addr | null;
  enable_open_registration: boolean;
  enabled: boolean;
  protocol_fee_collector_addr: Addr;
  protocol_fee_config: ProtocolFeeConfig;
  registration_admin_addr: Addr;
}
export interface FeeConfig {
  fee_denom: string;
  trading_fee_percentage_of_membership: Uint64;
}
export interface FeeShareConfig {
  share_to_all_members_percentage: Uint64;
  share_to_issuer_percentage: Uint64;
}
export interface ProtocolFeeConfig {
  membership_trading_fee_percentage: Uint64;
}
export interface CostToBuyMembershipResponse {
  all_members_fee: Uint128;
  issuer_fee: Uint128;
  price: Uint128;
  protocol_fee: Uint128;
  total_needed_from_user: Uint128;
}
export interface CostToSellMembershipResponse {
  all_members_fee: Uint128;
  issuer_fee: Uint128;
  price: Uint128;
  protocol_fee: Uint128;
  total_needed_from_user: Uint128;
}
export interface IsMemberResponse {
  amount: Uint128;
  is_member: boolean;
}
export interface MemberCountResponse {
  count: Uint128;
}
export interface MembersResponse {
  count: number;
  members: Member[];
  total_count: number;
}
export interface Member {
  amount: Uint128;
  member_user_id: Uint64;
}
export interface MembershipSupplyResponse {
  supply: Uint128;
}
export interface MembershipsResponse {
  count: number;
  memberships: Membership[];
  total_count: number;
}
export interface Membership {
  amount: Uint128;
  issuer_user_id: Uint64;
}
export interface UserResponse {
  user: User;
}
export interface User {
  addr: Addr;
  fee_config?: FeeConfig | null;
  fee_share_config?: FeeShareConfig | null;
  id: Uint64;
  membership_issued_by_me?: MembershipIssuedByMe | null;
  social_media_handle?: string | null;
  user_member_count: Uint128;
}
export interface MembershipIssuedByMe {
  member_count: Uint128;
  membership_supply: Uint128;
}
export interface UsersResponse {
  count: number;
  total_count: number;
  users: User[];
}
