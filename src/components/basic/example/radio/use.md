#### Radio Attributes ####

|参数|说明|类型|是否必传|默认值|可选值|
|:-|:-:|:-:|:-:|:-:|-:|
|label|Radio 的 value|string/number/boolean|false|-|-|
|value/v-model|绑定值|string/number/boolean|false|-|-|
|disabled|是否禁用|boolean|false|false|-|
|name|原生 name 属性|string|false|-|-|
|loading|加载状态|boolean|false|false|-|

#### Radio Events ####

|事件名称|说明|回调参数|
|:-|:-:|-:|
change|绑定值变化时触发的事件|选中的 Radio label 值