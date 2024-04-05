import { Thing, WithContext } from 'schema-dts';

export function JsonLd(props: { data: WithContext<Thing> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(props.data) }}
    />
  );
}
