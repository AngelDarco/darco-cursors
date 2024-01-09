export interface CursorProps {
  children: React.ReactElement | React.ReactElement[];
  type?: DefaultCursors;
  custom?: CustomCursors;
}

type DefaultCursors = "green" | "red" | "black";
// type CustomCursors = Partial<{
//   general: string;
//   context_menu: string;
//   help: string;
//   pointer: string;
//   progress: string;
//   wait: string;
//   cell: string;
//   crosshair: string;
//   text: string;
//   vertical_text: string;
//   alias: string;
//   copy: string;
//   move: string;
//   no_drop: string;
//   not_allowed: string;
//   grab: string;
//   grabbing: string;
//   all_scroll: string;
//   col_resize: string;
//   row_resize: string;
//   n_resize: string;
//   e_resize: string;
//   s_resize: string;
//   w_resize: string;
//   ne_resize: string;
//   nw_resize: string;
//   se_resize: string;
//   sw_resize: string;
//   ew_resize: string;
//   ns_resize: string;
//   nesw_resize: string;
//   nwse_resize: string;
//   zoom_in: string;
//   zoom_out: string;
// }>;

type CursorEventsProps = {
  container: HTMLDivElement;
  contextMenu: (cursor: string) => void;
};

type CustomCursors = Partial<{
  general: string;
  help: string;
  pointer: string;
  progress: string;
  text: string;
  move: string;
  not_allowed: string;
  all_scroll: string;
  col_resize: string;
  row_resize: string;
}>;
/* 
const cursors = {
  general: ".general",
  context_menu: ".context_menu",
  help: ".help",
  pointer: ".pointer",
  progress: ".progress",
  wait: ".wait",
  cell: ".cell",
  crosshair: ".crosshair",
  test: ".test",
  vertical_text: ".vertical_text",
  alias: ".alias",
  copy: ".copy",
  move: ".move",
  no_drop: ".no_drop",
  not_allowed: ".not_allowed",
  all_scroll: ".all_scroll",
  col_resize: ".col_resize",
  row_resize: ".row_resize",
  n_resize: ".n_resize",
  e_resize: ".e_resize",
  s_resize: ".s_resize",
  w_resize: ".w_resize",
  ne_resize: ".ne_resize",
  nw_resize: ".nw_resize",
  se_resize: ".se_resize",
  sw_resize: ".sw_resize",
  ew_resize: ".ew_resize",
  ns_resize: ".ns_resize",
  nesw_resize: ".nesw_resize",
  nwse_resize: ".nwse_resize",
  zoom_in: ".zoom_in",
  zoom_out: ".zoom_out",
};

*/
