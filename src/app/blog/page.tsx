import { Column, Heading, Text, Meta, Schema } from "@once-ui-system/core";
import { baseURL, blog, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: blog.title,
    description: blog.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(blog.title)}`,
    path: blog.path,
  });
}

export default function Blog() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        title={blog.title}
        description={blog.description}
        path={blog.path}
        image={`/api/og/generate?title=${encodeURIComponent(blog.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/blog`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="heading-strong-xl" marginLeft="24">
        {blog.title}
      </Heading>
      <Column fillWidth flex={1} gap="16" paddingX="24" paddingY="64" horizontal="center" vertical="center">
        <Heading as="h2" variant="heading-strong-l">
          Coming Soon
        </Heading>
        <Text onBackground="neutral-weak" align="center">
          I'm working on some articles. Check back soon.
        </Text>
      </Column>
    </Column>
  );
}
