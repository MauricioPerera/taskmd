// list_concepts — enumerate this origin's published knowledge concepts.
// The list is embedded at build time (content-addressed via tool_sha256).
var CONCEPTS = [{"id":"README.md","type":"Documentation","title":"TASK.md — Verificación determinista de tareas agénticas","description":""},{"id":"taskmd_spec_v0.1.md","type":"Documentation","title":"TASK.md — Especificación (borrador v0.1)","description":""}];
registerTool({
  name: "list_concepts",
  description: "List all knowledge concepts published by this origin (id, type, title, description).",
  inputSchema: { type: "object", properties: {} },
  handler: function () { return { concepts: CONCEPTS }; }
});
