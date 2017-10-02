<template>
  <div>
  <h1>Warning</h1>
  <table>
    <thead>
      <tr>
        <th>ルール ID</th>
        <th>メッセージ</th>
        <th>行番号</th>
        <th>位置</th>
      </tr>
    </thead>
    <tr v-for="lintMessage in this.$store.state.lintMessages"
      :key="lintMessage.index">
      <td>{{ lintMessage.ruleId }}</td>
      <td>{{ lintMessage.message }}</td>
      <td>{{ lintMessage.line }}</td>
      <td>{{ lintMessage.column }}</td>
    </tr>
  </table>
</div>
</template>

<script>
export default {
  name: 'warning'
}
</script>

<style scoped>
table, th, td {
  border: 1px solid #000;
}

table {
  border-collapse: collapse;
}
</style>
