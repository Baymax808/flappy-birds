# 电子签章与合同管理系统

==有没有更好的形式用来描述这种结构数据==

**分组标识**：contract
**分组名称**：电子签章与合同管理系统
**分组描述**：支持合同在线起草、审批、电子签署及归档。  

**调用域名**：
  - **开发环境调用域名**：https://dev.com
  - **生产环境调用域名**：https://prd.com

## 数据接口

### 读取合同列表

#### 详细信息

**请求标识**：GET
**接口名称**：get_contracts
**接口标识**：get_contracts
**请求路径**：/contracts

#### 请求信息

**Query String**：
  - **keyword**：
    - **数据类型**：String
    - **描述**：关键字
    - **是否必填**：否
    - **默认值**：''

**Request Header**：
  - **refresh-token**：
    - **数据类型**：String
    - **描述**：验证 token
    - **是否必填**：是
    - **默认值**：''


**Request Body**：
  - **result**：
    - **数据类型**：String
    - **描述**：返回结果
    - **是否必填**：否
    - **默认值**：''


#### 响应信息

**Response Header**：
  - **refresh-token**：
    - **数据类型**：String
    - **描述**：验证 token
    - **是否必填**：是
    - **默认值**：''


**Response Body**：
  - **result**：
    - **数据类型**：String
    - **描述**：返回结果
    - **是否必填**：否
    - **默认值**：''

### 读取合同详情

#### 详细信息

**请求标识**：GET
**接口名称**：get_contract_by_id
**接口标识**：get_contract_by_id
**请求路径**：/contracts/{id}

#### 请求信息

**Request Path**：
  - **keyword**：
    - **数据类型**：String
    - **描述**：关键字
    - **是否必填**：否
    - **默认值**：''

**Query String**：
  - **keyword**：
    - **数据类型**：String
    - **描述**：关键字
    - **是否必填**：否
    - **默认值**：''

**Request Header**：
  - **refresh-token**：
    - **数据类型**：String
    - **描述**：验证 token
    - **是否必填**：是
    - **默认值**：''


**Request Body**：
  - **result**：
    - **数据类型**：String
    - **描述**：返回结果
    - **是否必填**：否
    - **默认值**：''


#### 响应信息

**Response Header**：
  - **refresh-token**：
    - **数据类型**：String
    - **描述**：验证 token
    - **是否必填**：是
    - **默认值**：''


**Response Body**：
  - **result**：
    - **数据类型**：String
    - **描述**：返回结果
    - **是否必填**：否
    - **默认值**：''


## 数据模型

### contract

==是不是直接用 ts 定义更好==

**描述信息**：XXX

**属性列表**：
  - **name**：
    - **数据类型**：String
    - **描述**：关键字
    - **是否必填**：否
    - **默认值**：''
