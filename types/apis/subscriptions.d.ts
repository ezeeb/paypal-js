// https://developer.paypal.com/docs/api/subscriptions/v1/#subscriptions-create-request-body

export interface ShippingAmount {
    currency_code: string;
    value: string;
}

type UnknownObject = Record<string, unknown>;

export type CreateSubscriptionRequestBody = {
    plan_id: string;
    start_time?: string;
    quantity?: string;
    shipping_amount?: ShippingAmount;
    subscriber?: UnknownObject;
    auto_renewal?: boolean;
    application_context?: UnknownObject;
    custom_id?: string;
    plan?: UnknownObject;
};

export type LinkDescription = {
    href: string;
    rel: string;
    method?: string;
};

export type Address = {
    address_line_1: string;
    address_line_2: string;
    admin_area_2: string;
    admin_area_1: string;
    postal_code: string;
    country_code: string;
};

export type Amount = {
    currency_code?: string;
    value: string;
};

export type Payment = {
    amount: Amount;
    time: string;
};

export type TotalPrice = {
    gross_amount: Amount;
    shipping_amount: Amount;
    tax_amount: Amount;
    total_item_amount: Amount;
};

export type CycleExecution = {
    current_pricing_scheme_version: number;
    cycles_completed: number;
    cycles_remaining: number;
    sequence: number;
    tenure_type: "REGULAR";
    total_cycles: number;
    total_price_per_cycle: TotalPrice;
};

export type BillingInfo = {
    cycle_executions: CycleExecution[];
    failed_payments_count: number;
    last_payment: Payment;
    next_billing_time: string;
    outstanding_balance: Amount;
};

export type ShippingAddress= {
    address: Address;
}

export type Subscriber = {
    email_address: string;
    name: {
        given_name: string;
        surname: string;
    };
    payer_id: string;
    shipping_address: ShippingAddress;
};

export type SubscribeResponseBody = {
    billing_info: BillingInfo;
    create_time: string;
    id: string;
    links: LinkDescription[];
    plan_id: string;
    plan_overridden: boolean;
    quantity: string;
    shipping_amount: Amount;
    start_time: string;
    status:
        | "ACTIVE"
        | "APPROVED"
        | "APPROVAL_PENDING"
        | "SUSPENDED"
        | "CANCELLED"
        | "EXPIRED";
    status_changed_by: string;
    status_update_time: string;
    subscriber: Subscriber;
    update_time: string;
};
