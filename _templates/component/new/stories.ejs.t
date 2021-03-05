---
to: src/components/<%=name%>/<%= h.changeCase.lcFirst(name) %>.stories.js
---

import React from "react";
import <%=name%> from "<%=name%>";
import  "asserts/css/story.css";

export default {
    title: "UI组件/<%=name%>",
    components: <%=name%>
};

export const Default = () => <<%=name%>> 默认 </<%=name%>>