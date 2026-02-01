import {
  parse
} from "./chunk-WXPP4H2P.js";
import "./chunk-TAP2NJ7M.js";
import "./chunk-5YHPMDGJ.js";
import "./chunk-22OIMVI6.js";
import "./chunk-5FKBFJOL.js";
import "./chunk-3MP3TI4Q.js";
import "./chunk-MCTOBTJD.js";
import "./chunk-BU5O3AXZ.js";
import "./chunk-NZ3DG5PN.js";
import "./chunk-5CKGHSGX.js";
import {
  package_default
} from "./chunk-DKVJ5HIV.js";
import {
  selectSvgElement
} from "./chunk-PKHR6SCD.js";
import {
  configureSvgSize
} from "./chunk-H6XJNVOY.js";
import {
  __name,
  log
} from "./chunk-AGCN2EZW.js";
import "./chunk-ITKE3YAP.js";
import "./chunk-MWIBUSJU.js";
import "./chunk-FDBJFBLO.js";

// node_modules/.pnpm/mermaid@11.12.2/node_modules/mermaid/dist/chunks/mermaid.core/infoDiagram-WHAUD3N6.mjs
var parser = {
  parse: __name(async (input) => {
    const ast = await parse("info", input);
    log.debug(ast);
  }, "parse")
};
var DEFAULT_INFO_DB = {
  version: package_default.version + (true ? "" : "-tiny")
};
var getVersion = __name(() => DEFAULT_INFO_DB.version, "getVersion");
var db = {
  getVersion
};
var draw = __name((text, id, version) => {
  log.debug("rendering info diagram\n" + text);
  const svg = selectSvgElement(id);
  configureSvgSize(svg, 100, 400, true);
  const group = svg.append("g");
  group.append("text").attr("x", 100).attr("y", 40).attr("class", "version").attr("font-size", 32).style("text-anchor", "middle").text(`v${version}`);
}, "draw");
var renderer = { draw };
var diagram = {
  parser,
  db,
  renderer
};
export {
  diagram
};
//# sourceMappingURL=infoDiagram-WHAUD3N6-MDHMULAU.js.map
