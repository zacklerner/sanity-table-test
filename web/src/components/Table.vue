<template functional>
  <table>
    <tbody>
      <tr
        v-for="(row, index) in props.rows"
        :key="index"
      >
        <td
          v-for="(cell, index) in row.cells"
          :key="index"
          v-html="cell"
        ></td>
      </tr>
    </tbody>
  </table>
</template>