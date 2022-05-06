import Vue from 'vue'



import { Menu, MenuItem, Submenu,Button,
  Form,
  FormItem,
  Input,
  Message,
  Container,
  Header,
  Aside,
  Main,
  Submenu,
  MenuItem,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  Row,
  Col,
  Table,
  TableColumn,
  Switch,
  Tooltip,
  Pagination,
  Dialog,
  MessageBox,
  Tag,
  Tree,
  Select,
  Option,
  Cascader,
  Alert,
  Tabs,
  TabPane,
  Step,
  Steps } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(Menu);
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Switch)
Vue.use(Tooltip)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Tag)
Vue.use(Tree)
Vue.use(Select)
Vue.use(Option)
Vue.use(Cascader)
Vue.use(Alert)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Steps)
Vue.use(Step)
// 在Vue中使用ElementUI中的Message组件时，页面刷新之后会提示一个空的消息框解决办法
// 找到问题原因：由于在按需引入时，
// 使用Vue.use(Message)组件这样在每次刷新时就会弹出一个空白的消息提示框。

// 解决问题：
// 将Vue.use改为 Vue.component(Message)即可。
// 或者直接不用Vue.component()。只需进行引入和挂载即可。
// Vue.component(Message)//这句话目前可以不用
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm