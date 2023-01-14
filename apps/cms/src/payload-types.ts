/* tslint:disable */
/**
 * This file was automatically generated by Payload CMS.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: string;
  title: string;
  content?: {
    [k: string]: unknown;
  }[];
  site: string | Site;
  _status?: "draft" | "published";
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "sites".
 */
export interface Site {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "news".
 */
export interface News {
  id: string;
  title: string;
  slug: string;
  coverImage: string | File;
  content?: {
    [k: string]: unknown;
  }[];
  author: string | User;
  newsCategory: string | NewsCategory;
  site: string | Site;
  _status?: "draft" | "published";
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "files".
 */
export interface File {
  id: string;
  alt: string;
  site: string | Site;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  firstName: string;
  lastName: string;
  roles?: ("admin" | "editor" | "subEditor")[];
  sites?: string[] | Site[];
  email?: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  loginAttempts?: number;
  lockUntil?: string;
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "news-categories".
 */
export interface NewsCategory {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "projects".
 */
export interface Project {
  id: string;
  title: string;
  logo: string | File;
  projectType: string | ProjectCategory;
  location: string;
  size: string;
  coverImage: string | File;
  overview: {
    [k: string]: unknown;
  }[];
  locationTab: {
    [k: string]: unknown;
  }[];
  mapImage: string | File;
  site: string | Site;
  _status?: "draft" | "published";
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "project-categories".
 */
export interface ProjectCategory {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "careers".
 */
export interface Career {
  id: string;
  title: string;
  location: string;
  responsibilities: {
    [k: string]: unknown;
  }[];
  careersCategory: string | CareerCategory;
  site: string | Site;
  _status?: "draft" | "published";
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "career-categories".
 */
export interface CareerCategory {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "advertisements".
 */
export interface Advertisement {
  id: string;
  title: string;
  content?: {
    [k: string]: unknown;
  }[];
  site: string | Site;
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "menu".
 */
export interface Menu {
  id: string;
  owner?: string | User;
  createdAt: string;
  updatedAt: string;
}
