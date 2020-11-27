import { FunctionComponent } from 'react';

export interface IndexAction {
  type: string;
  label?: string;
  icon?: string;
  href?: string;
  cb?: () => void;
}

export interface SlugRaw {
  url: string;
  slug: string;
  pid?: string;
}

export interface Slug extends SlugRaw {
  _id: string;
}

export interface SlugResponse extends Slug {
  timeCreated: string;
  __v: number;
}

export interface Portal {
  type: string;
  component: FunctionComponent,
}
