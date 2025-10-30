# 企业身份与访问管理服务

==有没有更好的形式用来描述这种结构数据==

**分组标识**：company
**分组名称**：企业身份与访问管理服务
**分组描述**：提供统一的用户身份认证、角色权限管理及单点登录（SSO）能力

**调用域名**：
  - **开发环境调用域名**：https://dev.com
  - **生产环境调用域名**：https://prd.com

## 数据接口

### 读取企业列表

#### 详细信息

**请求标识**：GET
**接口名称**：get_companies
**接口标识**：get_companies
**请求路径**：/companies

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

### 读取企业详情

#### 详细信息

**请求标识**：GET
**接口名称**：get_company_by_id
**接口标识**：get_company_by_id
**请求路径**：/companies/{id}

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

### company

==是不是直接用 ts 定义更好==

**描述信息**：XXX

**属性列表**：
  - **name**：
    - **数据类型**：String
    - **描述**：关键字
    - **是否必填**：否
    - **默认值**：''
