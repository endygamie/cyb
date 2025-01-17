/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useContext } from 'react';
import { AppContext } from '../../../../context';
import JsonSchemaParse from './JsonSchemaParse';
import { FlexWrapCantainer } from '../../ui/ui';

function RenderAbiQuery({ contractAddress, schema }) {
  const { jsCyber } = useContext(AppContext);
  const [contractResponse, setContractResponse] = useState(null);

  const runQuery = async ({ formData }, key) => {
    if (jsCyber === null || !formData) {
      return;
    }
    setContractResponse(null);
    try {
      const queryResponseResult = await jsCyber.queryContractSmart(
        contractAddress,
        formData
      );
      console.log(`queryResponseResult`, queryResponseResult);
      setContractResponse({ result: queryResponseResult, key });
    } catch (e) {
      console.log(`errore`, e);
      // setQueryResponse({ error: `Query error: ${e.message}` });
    }
  };

  let itemAutoForm = [];

  if (schema.length > 0) {
    itemAutoForm = schema.map((items, key) => {
      // const bridge = makeBridge(items);
      // const key = uuidv4();
      return (
        <JsonSchemaParse
          schema={items}
          contractResponse={contractResponse}
          keyItem={key}
          onSubmitFnc={runQuery}
        />
      );
    });
  }

  return <>{itemAutoForm.length > 0 && itemAutoForm}</>;
}

export default RenderAbiQuery;
