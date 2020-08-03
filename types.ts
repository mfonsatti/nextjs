interface Entity {
  created_at: string;
  updated_at: string;
}

interface Link {
  label: string;
  url: string;
}

export interface MenuItem extends Link, Entity {
  id: number;
  subMenuItem: Link;
}

export interface State {
  menu: MenuItem[];
}
