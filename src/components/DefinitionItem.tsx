import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}

const DefinitionItem = ({ term, children }: Props) => {
  return (
    <Box marginY={5}>
      <Heading as="dt" fontSize="md" color="gray.600">
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};

export default DefinitionItem;

// 在 HTML 中，dd 和 dt 标签常用于定义列表（description list）中的条目，它们通常配合 dl 标签（定义列表）一起使用。它们的具体作用如下：

// dl（description list）： 定义一个描述列表，包含多个条目及其对应的描述。
// dt（description term）： 定义列表项的术语或名称，通常用于描述的标题或主项。
// dd（description definition）： 定义列表项的描述，通常是对 dt 项的解释或详细信息。
// 示例：
// html
// Copy code
// <dl>
//   <dt>HTML</dt>
//   <dd>一种用于创建网页的标记语言。</dd>

//   <dt>CSS</dt>
//   <dd>用于描述网页外观的样式表语言。</dd>

//   <dt>JavaScript</dt>
//   <dd>一种用于创建动态交互式网页的脚本语言。</dd>
// </dl>
// 在这个示例中：

// dt 标签包含的是描述项（如 "HTML", "CSS", "JavaScript"）。
// dd 标签包含的是描述项的定义或解释。
