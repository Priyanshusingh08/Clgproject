import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import app_config from "../../config";

function Manageuser() {
  const url = app_config.backend_url;

  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [updateFormData, setUpdateFormData] = useState(null);

  const fetchData = () => {
    fetch(url + "/user/getall").then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          console.log(data);
          setLoading(false);
          setDataList(data);
        });
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteUser = (id) => {
    console.log(id);

    fetch(url + "/user/delete/" + id, {
      method: "DELETE",
    }).then((res) => {
      if (res.status === 200) {
        toast("Item Deleted!!", {
          icon: "💀",
        });
        fetchData();
      }
    });
  };

  const updateUser = (userdata) => {
    // change the value of showUpdateForm to true
    setShowUpdateForm(true);
    // update the userFormData
    setUpdateFormData(userdata);
  };

  const showUsers = () => {
    if (!loading) {
      return dataList.map((user) => (
        <tr>
          <td>
            <img src="https://bootdey.com/img/Content/user_1.jpg" alt="" />
            {user.name}
            <span class="user-subhead">User</span>
          </td>
          <td>{new Date(user.createAt).toLocaleDateString()}</td>
          <td class="text-center">
            <span class="label label-default">pending</span>
          </td>
          <td>
            <a href="#">marlon@brando.com</a>
          </td>
          <td style={{ width: "20%" }}>
            <a href="#" class="table-link text-warning">
              <span class="fa-stack">
                <i class="fa fa-square fa-stack-2x"></i>
                <i class="fa fa-search-plus fa-stack-1x fa-inverse"></i>
              </span>
            </a>
            <a href="#" class="table-link text-info">
              <span class="fa-stack">
                <i class="fa fa-square fa-stack-2x"></i>
                <i class="fa fa-pencil fa-stack-1x fa-inverse"></i>
              </span>
            </a>
            <button
              class="table-link danger"
              onClick={(e) => deleteUser(user._id)}
            >
              <span class="fa-stack">
                <i class="fa fa-square fa-stack-2x"></i>
                <i class="fa fa-trash-o fa-stack-1x fa-inverse"></i>
              </span>
            </button>
          </td>
        </tr>
      ));
    }
  };
  return (
    <div>
      <link
        rel="stylesheet"
        type="text/css"
        href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"
      />

      <div class="container bootstrap snippets bootdey">
        <div class="row">
          <div class="col-lg-12">
            <div class="main-box no-header clearfix">
              <div class="main-box-body clearfix">
                <div class="table-responsive">
                  <table class="table user-list">
                    <thead>
                      <tr>
                        <th>
                          <span>User</span>
                        </th>
                        <th>
                          <span>Created</span>
                        </th>
                        <th class="text-center">
                          <span>Status</span>
                        </th>
                        <th>
                          <span>Email</span>
                        </th>
                        <th>&nbsp;</th>
                      </tr>
                    </thead>
                    <tbody>{showUsers()}</tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Manageuser;
