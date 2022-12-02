<template>
  <portable-text
    :blocks="blocks"
    :serializers="serializers"
    :projectId="$static.metadata.sanityOptions.projectId"
    :dataset="$static.metadata.sanityOptions.dataset"
  />
</template>

<script>
import PortableText from 'sanity-blocks-vue-component'

export default {
  props: {
    blocks: Array
  },
  components: {
    PortableText
  },
  data() {
    return {
      serializers: {
        types: {
          mainImage: ({ node }) => (
            <figure>
              <img
                src={this.$urlForImage(node, this.$static.metadata.sanityOptions)
                  .auto('format')
                  .url()}
                alt={node.alt}
              />
              <figcaption>{node.caption}</figcaption>
            </figure>
          ),
          table: (props) => 
            console.log("table:", props) || (
              <table>
                <tbody>
                  {
                    props.node.rows.map((row, index) => (
                      <tr>
                        {
                          row.cells.map((cell) => {
                            return (index === 0 ? <th>{cell}</th> : <td>{cell}</td> )
                          })
                        } 
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            )
        }
      }
    }
  }
}
</script>

<static-query>
  {
    metadata{
    sanityOptions{
      projectId
      dataset
    }
  }
}
</static-query>
