export interface Root {
  food: Food
  componentList: ComponentList
}

export interface Food {
  f_id: number
  f_ori_name: string
  f_eng_name: string
  sci_name: string
  langual: string
  foodexcode: string
  mainlevelcode: number
  codlevel1: string
  namelevel1: string
  codsublevel: number
  codlevel2: string
  namelevel2: string
  f_des_esp: string
  f_des_ing: string
  photo: string
  edible_portion: number
  f_origen: string
  foodvalue: Foodvalue[]
}

export interface Foodvalue {
  c_id: number
  c_ori_name: string
  c_eng_name: string
  eur_name: string
  componentgroup_id: number
  glos_esp: string
  glos_ing: string
  cg_descripcion: string
  cg_description: string
  best_location: number | string
  v_unit: string
  moex: string
  stdv: string
  min: string
  max: string
  v_n: string
  u_id: string
  u_descripcion: string
  u_description: string
  value_type: string
  vt_descripcion: string
  vt_description: string
  mu_id: string
  mu_descripcion: string
  mu_description: string
  ref_id: number
  citation: string
  at_descripcion: string
  at_description: string
  pt_descripcion: string
  pt_description: string
  method_id: number
  mt_descripcion: string
  mt_description: string
  m_descripcion: string
  m_description: string
  m_nom_esp: string
  m_nom_ing: string
  mhd_descripcion: string
  mhd_description: string
}

export interface ComponentList {
  component: Component[]
}

export interface Component {
  id: number
  name_esp: string
  group: string
  name_ing: string
}
