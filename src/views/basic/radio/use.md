#### Radio Attributes ####

|参数|说明|类型|是否必传|默认值|可选值|
|:-|:-:|:-:|:-:|:-:|-:|
|label|Radio 的 value|string/number/boolean|false|-|-|
|value/v-model|绑定值|string/number/boolean|false|-|-|
|disabled|是否禁用|boolean|false|false|-|
|name|原生 name 属性|string|false|-|-|
|loading|加载状态|boolean|false|false|-|
|options|配置选项,具体看下表|object|-|-|

#### options ####
|参数|说明|类型|默认值|可选值|
|:-|:-:|:-:|:-:|-:|
|label|指定节点标签为节点对象的某个属性值|string|-|-|
|children|指定子节点对象的某个属性值|string|-|-|
|className|自定义样式名字|string|-|-|

#### Radio Events ####

|事件名称|说明|回调参数|
|:-|:-:|-:|
change|绑定值变化时触发的事件|选中的 Radio label 值