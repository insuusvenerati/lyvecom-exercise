export type InfoCollectionWithError = InfoCollection & {
  error?: boolean;
  message?: string;
  loading?: boolean;
};

export interface InfoCollection {
  result?: Result;
}

export interface Result {
  account: string;
  account_settings: AccountSettings;
  banner_image: null;
  created_at: Date;
  current_product: CurrentProduct[];
  email: string;
  first_name: string;
  id: string;
  last_name: null;
  local_time: string;
  notes: string;
  phone_number: string;
  products: any[];
  schedule_time: number;
  session_id: string;
  status: string;
  token: string;
}

export interface AccountSettings {
  accent_color: string;
  brand_logo: string;
  cta_color: string;
  customer_notification_start_stream: string;
  font_type: string;
  primary_color: string;
}

export interface CurrentProduct {
  admin_graphql_api_id: string;
  body_html: string;
  created_at: Date;
  handle: string;
  id: number;
  image: Image;
  images: Image[];
  options: Option[];
  product_type: string;
  published_at: Date;
  published_scope: string;
  status: string;
  tags: string;
  template_suffix: string;
  title: string;
  updated_at: Date;
  variants: Variant[];
  vendor: string;
}

export interface Image {
  admin_graphql_api_id: string;
  created_at: Date;
  height: number;
  id: number;
  position: number;
  product_id: number;
  src: string;
  updated_at: Date;
  variant_ids: number[];
  width: number;
}

export interface Option {
  id: number;
  name: string;
  position: number;
  product_id: number;
  values: string[];
}

export interface Variant {
  admin_graphql_api_id: string;
  barcode: string;
  compare_at_price: null | string;
  created_at: Date;
  fulfillment_service: string;
  grams: number;
  id: number;
  image_id: number;
  inventory_item_id: number;
  inventory_management: string;
  inventory_policy: string;
  inventory_quantity: number;
  old_inventory_quantity: number;
  option1: string;
  option2: string;
  option3: string;
  position: number;
  price: string;
  product_id: number;
  requires_shipping: boolean;
  sku: string;
  taxable: boolean;
  title: string;
  updated_at: Date;
  weight: number;
  weight_unit: string;
}
