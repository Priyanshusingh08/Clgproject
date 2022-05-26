import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import app_config from "../../config";

const ViewPage = () => {
  const navigate = useNavigate();
  const url = app_config.backend_url;

  const { pageid } = useParams();
  const [webpageData, setWebpageData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    fetch(url + "/webpage/getbyid/" + pageid).then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          console.log(data);
          setWebpageData(data);
          setLoading(false);
        });
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const createComponent = (component, i) => {
    return React.createElement(
      component.tag,
      {
        class: component.classes.join(" "),
      },
      [component.children]
    );
  };

  const renderJSX = (components) => {
    console.log(components);
    return components.map(({ name, classes, tag, content, children }, i) => {
      if (content) {
        return createComponent(
          {
            name,
            classes,
            tag,
            ...{ children: content },
          },
          i
        );
      } else if (children) {
        console.log(renderJSX(children));
        const obj = {
          name: name,
          classes: classes,
          tag: tag,
          children: renderJSX(children),
        };
        // console.log(obj);
        return createComponent(obj, i);
      }
    });
  };

  const showPage = () => {
    if (!loading) {
      return renderJSX(webpageData.data);
    }
  };

  return <div>{showPage()}</div>;
};

export default ViewPage;
