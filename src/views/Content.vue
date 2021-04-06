<template>
  <div>
    <v-row
      align="center"
      justify="space-around"
    >
    <v-btn depressed :to="'/edit/'+id">
      编辑
    </v-btn>
    </v-row>
    <Markdown :content="content"/>
  </div>
</template>

<script>
import Markdown from '@/components/Markdown.vue';
import { getPostByPostId } from '@/api/post';

export default {
  name: 'Content',
  components: { Markdown },
  props: ['id'],
  data: () => ({
    content: '',
  }),
  methods: {
    edit() {
      console.log('editttt');
    },
    getPostById() {
      // console.log('id', this.id);
      // const res = await getPostByPostId(this.id);
      // console.log('content', res.data.content);
      // return res.data.content;
      // return '## 安装Maven\n'
      //   + '\n'
      //   + '## SpringBoot项目部署\n'
      //   + '\n'
      //   + '- 源码目录下运行`mvn spring-boot:run` 前台运行\n'
      //   + '\n'
      //   + '- 打包后执行`java -jar demo.jar ` 前台运行\n'
      //   + '\n'
      //   + '- `nohup mvn spring-boot:run &`或者 ` nohup java -jar demo.jar &`后台运行\n'
      //   + '\n'
      //   + '  [别把&和nohup混为一谈, 根本不是同一个东西好不好](https://blog.csdn.net/stpeace/article/details/76389073)\n'
      //   + '\n'
      //   + '  https://docs.spring.io/spring-boot/docs/current/maven-plugin/index.html\n'
      //   + '\n'
      //   + '- `./mvnw spring-boot:run -Dspring-boot.run.profiles=prod`\n'
      //   + '\n'
      //   + '- `java -jar -Dspring.profiles.active=test demo-0.0.1-SNAPSHOT.jar`\n'
      //   + '\n'
      //   + '## 学习了解\n'
      //   + '\n'
      //   + '- 软连接\n'
      //   + '- [ubuntu安装jdk ](https://blog.csdn.net/u012375858/article/details/54695661)\n'
      //   + '- Linux运行程序的方式\n'
      //   + '  - 占用TCP端口\n'
      //   + '  -  绑定系统socket\n'
      //   + '- Linux基本用户、用户组的添加删除修改\n'
      //   + '- 原始套接字\n'
      //   + '- unicode\n'
      //   + '- rsync\n'
      //   + '\n'
      //   + '#### Vue绿色 \\#3eaf7c\n'
      //   + '\n'
      //   + '\\#3eaf7c\n'
      //   + '\n'
      //   + '\n'
      //   + '\n'
      //   + 'limit 0 ？\n'
      //   + '\n'
      //   + '![wallhaven-yjv9vx](https://p.vczyh.com/blog/wallhaven-yjv9vx.jpg)';
    },
  },
  mounted() {
    getPostByPostId(this.id).then((res) => {
      this.content = res.data.content;
    });
  },
};
</script>

<style scoped>

</style>
