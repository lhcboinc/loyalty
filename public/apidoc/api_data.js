define({ "api": [
  {
    "type": "post",
    "url": "/api/admin/login",
    "title": "Login",
    "name": "Login",
    "group": "AdminAuth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "phone",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../app/Http/Controllers/Api/AdminController.php",
    "groupTitle": "AdminAuth"
  },
  {
    "type": "post",
    "url": "/api/bill_programs/create",
    "title": "Create Bill Program",
    "name": "CreateBillProgram",
    "group": "AdminBillPrograms",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic current user token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "from",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "to",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "percent",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "bill_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../app/Http/Controllers/Api/AdminController.php",
    "groupTitle": "AdminBillPrograms"
  },
  {
    "type": "get",
    "url": "/api/bill_programs/delete/:id",
    "title": "Delete Bill Program",
    "name": "DeleteBillProgram",
    "group": "AdminBillPrograms",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic current user token</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../app/Http/Controllers/Api/AdminController.php",
    "groupTitle": "AdminBillPrograms"
  },
  {
    "type": "post",
    "url": "/api/bill_programs/edit/:id",
    "title": "Edit Bill Program",
    "name": "EditBillProgram",
    "group": "AdminBillPrograms",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic current user token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "from",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "to",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "percent",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "bill_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../app/Http/Controllers/Api/AdminController.php",
    "groupTitle": "AdminBillPrograms"
  },
  {
    "type": "get",
    "url": "/api/bill_programs/get/:id",
    "title": "Get Bill Program",
    "name": "GetBillProgram",
    "group": "AdminBillPrograms",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic current user token</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../app/Http/Controllers/Api/AdminController.php",
    "groupTitle": "AdminBillPrograms"
  },
  {
    "type": "get",
    "url": "/api/bill_programs/list",
    "title": "Get Bill Programs List",
    "name": "GetBillProgramsList",
    "group": "AdminBillPrograms",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic current user token</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../app/Http/Controllers/Api/AdminController.php",
    "groupTitle": "AdminBillPrograms"
  },
  {
    "type": "get",
    "url": "/api/bill_programs/list/:bill_id",
    "title": "Get Bill Programs List for Bill",
    "name": "GetBillProgramsListForBill",
    "group": "AdminBillPrograms",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic current user token</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../app/Http/Controllers/Api/AdminController.php",
    "groupTitle": "AdminBillPrograms"
  },
  {
    "type": "post",
    "url": "/api/bill_types/create",
    "title": "Create Bill Type",
    "name": "CreateBillType",
    "group": "AdminBillTypes",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic current user token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../app/Http/Controllers/Api/AdminController.php",
    "groupTitle": "AdminBillTypes"
  },
  {
    "type": "get",
    "url": "/api/bill_types/delete/:id",
    "title": "Delete Bill Type",
    "name": "DeleteBillType",
    "group": "AdminBillTypes",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic current user token</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../app/Http/Controllers/Api/AdminController.php",
    "groupTitle": "AdminBillTypes"
  },
  {
    "type": "post",
    "url": "/api/bill_types/edit/:id",
    "title": "Edit Bill Type",
    "name": "EditBillType",
    "group": "AdminBillTypes",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic current user token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../app/Http/Controllers/Api/AdminController.php",
    "groupTitle": "AdminBillTypes"
  },
  {
    "type": "get",
    "url": "/api/bill_types/get/:id",
    "title": "Get Bill Type",
    "name": "GetBillType",
    "group": "AdminBillTypes",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic current user token</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../app/Http/Controllers/Api/AdminController.php",
    "groupTitle": "AdminBillTypes"
  },
  {
    "type": "get",
    "url": "/api/bill_types/list",
    "title": "Get Bill Type List",
    "name": "GetBillTypeList",
    "group": "AdminBillTypes",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic current user token</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../app/Http/Controllers/Api/AdminController.php",
    "groupTitle": "AdminBillTypes"
  },
  {
    "type": "post",
    "url": "/api/cards/create",
    "title": "Create Card",
    "name": "CreateCard",
    "group": "AdminCards",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic current user token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "user_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../app/Http/Controllers/Api/AdminController.php",
    "groupTitle": "AdminCards"
  },
  {
    "type": "get",
    "url": "/api/cards/delete/:id",
    "title": "Delete Card",
    "name": "DeleteCard",
    "group": "AdminCards",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic current user token</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../app/Http/Controllers/Api/AdminController.php",
    "groupTitle": "AdminCards"
  },
  {
    "type": "post",
    "url": "/api/cards/edit/:id",
    "title": "Edit Card",
    "name": "EditCard",
    "group": "AdminCards",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic current user token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "user_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../app/Http/Controllers/Api/AdminController.php",
    "groupTitle": "AdminCards"
  },
  {
    "type": "get",
    "url": "/api/cards/get/:id",
    "title": "Get Card",
    "name": "GetCard",
    "group": "AdminCards",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic current user token</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../app/Http/Controllers/Api/AdminController.php",
    "groupTitle": "AdminCards"
  },
  {
    "type": "get",
    "url": "/api/cards/list",
    "title": "Get Cards List",
    "name": "GetCardsList",
    "group": "AdminCards",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic current user token</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../app/Http/Controllers/Api/AdminController.php",
    "groupTitle": "AdminCards"
  },
  {
    "type": "post",
    "url": "/api/categories/create",
    "title": "Create Category",
    "name": "CreateCategory",
    "group": "AdminCategories",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic current user token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../app/Http/Controllers/Api/AdminController.php",
    "groupTitle": "AdminCategories"
  },
  {
    "type": "post",
    "url": "/api/categories/sub_create",
    "title": "Create Sub Category",
    "name": "CreateSubCategory",
    "group": "AdminCategories",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic current user token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "parent_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../app/Http/Controllers/Api/AdminController.php",
    "groupTitle": "AdminCategories"
  },
  {
    "type": "get",
    "url": "/api/categories/delete/:id",
    "title": "Delete Category",
    "name": "DeleteCategory",
    "group": "AdminCategories",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic current user token</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../app/Http/Controllers/Api/AdminController.php",
    "groupTitle": "AdminCategories"
  },
  {
    "type": "post",
    "url": "/api/categories/edit/:id",
    "title": "Edit Category",
    "name": "EditCategory",
    "group": "AdminCategories",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic current user token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "name",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../app/Http/Controllers/Api/AdminController.php",
    "groupTitle": "AdminCategories"
  },
  {
    "type": "post",
    "url": "/api/categories/sub_edit/:id",
    "title": "Edit Sub Category",
    "name": "EditSubCategory",
    "group": "AdminCategories",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic current user token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "parent_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../app/Http/Controllers/Api/AdminController.php",
    "groupTitle": "AdminCategories"
  },
  {
    "type": "get",
    "url": "/api/categories/list",
    "title": "Get Categories List",
    "name": "GetCategoriesList",
    "group": "AdminCategories",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic current user token</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../app/Http/Controllers/Api/AdminController.php",
    "groupTitle": "AdminCategories"
  },
  {
    "type": "post",
    "url": "/api/fields/create",
    "title": "Create Field",
    "name": "CreateField",
    "group": "AdminFields",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic current user token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../app/Http/Controllers/Api/AdminController.php",
    "groupTitle": "AdminFields"
  },
  {
    "type": "get",
    "url": "/api/fields/delete/:id",
    "title": "Delete Field",
    "name": "DeleteField",
    "group": "AdminFields",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic current user token</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../app/Http/Controllers/Api/AdminController.php",
    "groupTitle": "AdminFields"
  },
  {
    "type": "post",
    "url": "/api/fields/edit/:id",
    "title": "Edit Field",
    "name": "EditField",
    "group": "AdminFields",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic current user token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "name",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../app/Http/Controllers/Api/AdminController.php",
    "groupTitle": "AdminFields"
  },
  {
    "type": "get",
    "url": "/api/fields/get/:id",
    "title": "Get Field",
    "name": "GetField",
    "group": "AdminFields",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic current user token</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../app/Http/Controllers/Api/AdminController.php",
    "groupTitle": "AdminFields"
  },
  {
    "type": "get",
    "url": "/api/fields/list",
    "title": "Get Fields List",
    "name": "GetFieldsList",
    "group": "AdminFields",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic current user token</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../app/Http/Controllers/Api/AdminController.php",
    "groupTitle": "AdminFields"
  },
  {
    "type": "post",
    "url": "/api/outlets/create",
    "title": "Create Outlet",
    "name": "CreateOutlet",
    "group": "AdminOutlets",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic current user token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "phone",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "address",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../app/Http/Controllers/Api/AdminController.php",
    "groupTitle": "AdminOutlets"
  },
  {
    "type": "get",
    "url": "/api/outlets/delete/:id",
    "title": "Delete Outlet",
    "name": "DeleteOutlet",
    "group": "AdminOutlets",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic current user token</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../app/Http/Controllers/Api/AdminController.php",
    "groupTitle": "AdminOutlets"
  },
  {
    "type": "post",
    "url": "/api/outlets/edit/:id",
    "title": "Edit Outlet",
    "name": "EditOutlet",
    "group": "AdminOutlets",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic current user token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "phone",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "address",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../app/Http/Controllers/Api/AdminController.php",
    "groupTitle": "AdminOutlets"
  },
  {
    "type": "get",
    "url": "/api/outlets/get/:id",
    "title": "Get Outlet",
    "name": "GetOutlet",
    "group": "AdminOutlets",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic current user token</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../app/Http/Controllers/Api/AdminController.php",
    "groupTitle": "AdminOutlets"
  },
  {
    "type": "get",
    "url": "/api/outlets/list",
    "title": "Get Outlets List",
    "name": "GetOutletsList",
    "group": "AdminOutlets",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic current user token</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../app/Http/Controllers/Api/AdminController.php",
    "groupTitle": "AdminOutlets"
  },
  {
    "type": "post",
    "url": "/api/products/create",
    "title": "Create Product",
    "name": "CreateProduct",
    "group": "AdminProducts",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic current user token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "outlet_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "category_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "price",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "file_content",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../app/Http/Controllers/Api/AdminController.php",
    "groupTitle": "AdminProducts"
  },
  {
    "type": "get",
    "url": "/api/products/delete/:id",
    "title": "Delete Product",
    "name": "DeleteProduct",
    "group": "AdminProducts",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic current user token</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../app/Http/Controllers/Api/AdminController.php",
    "groupTitle": "AdminProducts"
  },
  {
    "type": "post",
    "url": "/api/products/edit/:id",
    "title": "Edit Product",
    "name": "EditProduct",
    "group": "AdminProducts",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic current user token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "outlet_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "category_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "price",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "file_content",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../app/Http/Controllers/Api/AdminController.php",
    "groupTitle": "AdminProducts"
  },
  {
    "type": "get",
    "url": "/api/products/get/:id",
    "title": "Get Product",
    "name": "GetProduct",
    "group": "AdminProducts",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic current user token</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../app/Http/Controllers/Api/AdminController.php",
    "groupTitle": "AdminProducts"
  },
  {
    "type": "post",
    "url": "/api/products/list",
    "title": "Get Products List",
    "name": "GetProductsList",
    "group": "AdminProducts",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic current user token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "order",
            "description": "<p>order field name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "dir",
            "description": "<p>order direction</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "offset",
            "description": "<p>start row number, used only when limit is set</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "limit",
            "description": "<p>row count</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "outlet_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "category_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../app/Http/Controllers/Api/AdminController.php",
    "groupTitle": "AdminProducts"
  },
  {
    "type": "get",
    "url": "/api/sales/get/:id",
    "title": "Get Sale",
    "name": "GetSale",
    "group": "AdminSales",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic current user token</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../app/Http/Controllers/Api/AdminController.php",
    "groupTitle": "AdminSales"
  },
  {
    "type": "get",
    "url": "/api/sales/list",
    "title": "Get Sales List",
    "name": "GetSalesList",
    "group": "AdminSales",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic current user token</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../app/Http/Controllers/Api/AdminController.php",
    "groupTitle": "AdminSales"
  },
  {
    "type": "post",
    "url": "/api/users/create",
    "title": "Create User",
    "name": "CreateUser",
    "group": "AdminUsers",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic current user token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "first_name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "second_name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "phone",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "allowedValues": [
              "0",
              "1",
              "2"
            ],
            "optional": false,
            "field": "type",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../app/Http/Controllers/Api/AdminController.php",
    "groupTitle": "AdminUsers"
  },
  {
    "type": "get",
    "url": "/api/users/delete/:id",
    "title": "Delete User",
    "name": "DeleteUser",
    "group": "AdminUsers",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic current user token</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../app/Http/Controllers/Api/AdminController.php",
    "groupTitle": "AdminUsers"
  },
  {
    "type": "post",
    "url": "/api/users/edit/:id",
    "title": "Edit User",
    "name": "EditUser",
    "group": "AdminUsers",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic current user token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "first_name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "second_name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "password",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "phone",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "allowedValues": [
              "0",
              "1",
              "2"
            ],
            "optional": true,
            "field": "type",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../app/Http/Controllers/Api/AdminController.php",
    "groupTitle": "AdminUsers"
  },
  {
    "type": "get",
    "url": "/api/users/get/:id",
    "title": "Get User",
    "name": "GetUser",
    "group": "AdminUsers",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic current user token</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../app/Http/Controllers/Api/AdminController.php",
    "groupTitle": "AdminUsers"
  },
  {
    "type": "post",
    "url": "/api/users/list",
    "title": "Get Users List",
    "name": "GetUsersList",
    "group": "AdminUsers",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic current user token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "order",
            "description": "<p>order field name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "dir",
            "description": "<p>order direction</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "offset",
            "description": "<p>start row number, used only when limit is set</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "limit",
            "description": "<p>row count</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../app/Http/Controllers/Api/AdminController.php",
    "groupTitle": "AdminUsers"
  },
  {
    "type": "post",
    "url": "/api/clients/login",
    "title": "Login",
    "name": "Login",
    "group": "ClientAuth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../app/Http/Controllers/Api/ClientController.php",
    "groupTitle": "ClientAuth"
  },
  {
    "type": "post",
    "url": "/api/clients/sms",
    "title": "Send Auth Sms",
    "name": "SendAuthSms",
    "group": "ClientAuth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "phone",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../app/Http/Controllers/Api/ClientController.php",
    "groupTitle": "ClientAuth"
  },
  {
    "type": "get",
    "url": "/api/clients/categories/list",
    "title": "Get Categories List",
    "name": "GetCategoriesList",
    "group": "ClientCategories",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic current user token</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../app/Http/Controllers/Api/ClientController.php",
    "groupTitle": "ClientCategories"
  },
  {
    "type": "get",
    "url": "/api/clients/products/get/:id",
    "title": "Get Product",
    "name": "GetProduct",
    "group": "ClientProducts",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic current user token</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../app/Http/Controllers/Api/ClientController.php",
    "groupTitle": "ClientProducts"
  },
  {
    "type": "post",
    "url": "/api/clients/products/list",
    "title": "Get Products List",
    "name": "GetProductsList",
    "group": "ClientProducts",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic current user token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "order",
            "description": "<p>order field name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "dir",
            "description": "<p>order direction</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "offset",
            "description": "<p>start row number, used only when limit is set</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "limit",
            "description": "<p>row count</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "outlet_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "category_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../app/Http/Controllers/Api/ClientController.php",
    "groupTitle": "ClientProducts"
  },
  {
    "type": "post",
    "url": "/api/outlets/sales/create",
    "title": "Create Sale",
    "name": "CreateSale",
    "group": "OutletSales",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "outlet_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "user_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "bill_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "amount",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../app/Http/Controllers/Api/OutletController.php",
    "groupTitle": "OutletSales"
  },
  {
    "type": "post",
    "url": "/api/outlets/users/find_by_phone",
    "title": "Find User By Phone",
    "name": "FindUserByPhone",
    "group": "OutletSales",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "phone",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../app/Http/Controllers/Api/OutletController.php",
    "groupTitle": "OutletSales"
  },
  {
    "type": "post",
    "url": "/api/outlets/users/list",
    "title": "Get Users List",
    "name": "GetUsersList",
    "group": "OutletSales",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "like",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "order",
            "description": "<p>order field name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "dir",
            "description": "<p>order direction</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "offset",
            "description": "<p>start row number, used only when limit is set</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "limit",
            "description": "<p>row count</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../app/Http/Controllers/Api/OutletController.php",
    "groupTitle": "OutletSales"
  }
] });
