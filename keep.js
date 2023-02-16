<div className="flex flex-col w-full h-full  mt-5 ">
{modelSetting ? (
  <>
    {modelSetting.length > 0 ? (
      <div className="flex flex-col w-full h-full mx-0  overflow-x-auto">
        {" "}
        <table
          className="table overflow-scroll w-full mb-3 text-sm table-auto mt-3"
          role="table"
        >
          <tbody>
            {modelSetting.map((item, i) => (
              <tr
                key={i}
                className="inline-flex pr-6 items-center h-12 p-2 space-x-20 border first:mr-5 ju1tify-start"
                role="row"
              >
                <td
                  // style={{ color }}
                  className="text-[#1F1F1F] inline-block w-60 text-left"
                  role="cell"
                >
                  {item.key}
                </td>
                <td
                  className="invisible inline-block w-12 text-left"
                  role="cell"
                ></td>
                <td
                  className="inline-flex justify-center  w-12 border text-left"
                  role="cell"
                >
                  {item.value}
                </td>
                <td
                  className="inline-flex justify-center border  px-2 text-left"
                  role="cell"
                >
                  {item.description ? item.description : "nil"}
                </td>{" "}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ) : (
      <></>
    )}
  </>
) : (
  <>
    <div className="flex items-center justify-center flex-col my-[3rem]">
      <h1 className="text-base md:text-xl font-bold">
        Oops, you have no model settings
      </h1>
      <p className=" text-sm md:text-base my-3">
        You can fill the form in just five minutes
      </p>
    </div>
  </>
)}
{modelSetting && modelSetting.length > 0 && (
  <div
    onClick={openModal}
    className="mt-4 cursor-pointer hover:opacity-80"
  >
    <button
      style={{ background: color }}
      className="inline-flex items-center justify-center w-4 h-4 m-auto text-white bg-[#6BB521] rounded-full outline-none appearance-none p-auto "
    >
      +
    </button>
    <span className="ml-2 text-sm font-normal text-gray-500">
      Update Model settings
    </span>
  </div>
)}
<Modal
  isOpen={modalIsOpen}
  onAfterOpen={afterOpenModal}
  onRequestClose={closeModal}
  style={customStyles}
  contentLabel="Modal"
>
  {" "}
  <div className="w-full">
    <h3 className="text-lg md:text-xl">Update Model Settings</h3>
    <Formik
      validationSchema={Validation}
      initialValues={{
        modelSettings: [
          {
            key: "",
            description: "",
            value: 0,
          },
        ],
      }}
      onSubmit={(values, action) => {
        setLoading(true);
        const obj = values.modelSettings[0];
        const newArr = modelSetting?.map((item) =>
          item.key === obj.key
            ? { ...item, description: obj.description, value: obj.value }
            : item
        );
        const data = {
          modelSettings: newArr,
          entityId: Number(assumptions?.entityId),
          entityType: String(assumptions?.entityType),
        };
        dispatch(updateModelSettings(data));
        dispatch(
          getGeneralAssumptions({
            entityId: Number(assumptions?.entityId),
            entityType: String(assumptions?.entityType),
          })
        );
        action.resetForm();
        setLoading(false);
      }}
    >
      {(props) => (
        <form onSubmit={props.handleSubmit}>
          {" "}
          <FieldArray
            name="modelSettings"
            render={(arrayHelpers) => (
              <>
                {props.values.modelSettings.map((item, index) => (
                  <section
                    key={index}
                    className="flex flex-col items-start flex-wrap w-full gap-3 px-0 md:flex-row "
                  >
                    {/* styles.inner__{" "} */}
                    <div className="flex flex-col items-start flex-wrap w-full gap-3 px-0 md:flex-row ">
                      {/* styles.inputCon{" "} */}
                      <div className="flex flex-col w-full md:w-[32%] ">
                        {/* styles.label */}
                        <label
                          className={
                            "text-[#5e5e5e] block font-medium text-sm"
                          }
                        >
                          Key
                        </label>
                        <Field
                          className="py-3 px-2 w-full bg-transparent border rounded outline-none mt-2 border[#dddddd]"
                          name={`modelSettings.${index}.key`}
                        />
                        <span
                          className={"block mt-2 text-[#ff0000] text-sm"}
                        >
                          <ErrorMessage
                            name={`modelSettings.${index}.key`}
                          />
                        </span>
                      </div>
                      <div className="flex flex-col w-full md:w-[32%] ">
                        <label
                          className={
                            "text-[#5e5e5e] block font-medium text-sm"
                          }
                        >
                          Description
                        </label>
                        <Field
                          className="py-3 px-2 w-full bg-transparent border rounded outline-none mt-2 border[#dddddd]"
                          name={`modelSettings.${index}.description`}
                        />
                        <span
                          className={"block mt-2 text-[#ff0000] text-sm"}
                        >
                          <ErrorMessage
                            name={`modelSettings.${index}.description`}
                          />
                        </span>
                      </div>
                      <div className="flex flex-col w-full md:w-[32%] ">
                        <label
                          className={
                            "text-[#5e5e5e] block font-medium text-sm"
                          }
                        >
                          Value
                        </label>
                        <Field
                          type="number"
                          className="py-3 px-2 w-full bg-transparent border rounded outline-none mt-2 border[#dddddd]"
                          name={`modelSettings.${index}.value`}
                        />
                        <span
                          className={"block mt-2 text-[#ff0000] text-sm"}
                        >
                          <ErrorMessage
                            name={`modelSettings.${index}.value`}
                          />
                        </span>
                      </div>
                    </div>
                    <div className={""}>
                      {index > 0 && (
                        <button
                          className={""}
                          type="button"
                          onClick={() => arrayHelpers.remove(index)}
                        >
                          <span>-</span> Remove
                        </button>
                      )}
                    </div>
                  </section>
                ))}
                <div className={""}>
                  <button
                    className={""}
                    type="button"
                    onClick={() =>
                      arrayHelpers.insert(
                        props.values.modelSettings.length,
                        {
                          key: "",
                          description: "",
                          value: 0,
                        }
                      )
                    }
                  >
                    <span>+</span> Add another
                  </button>
                </div>
              </>
            )}
          ></FieldArray>
          <div className="flex w-full gap-2 mt-4">
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(!modalIsOpen);
              }}
              className="border border-black rounded-lg w-36"
            >
              Cancel
            </button>
            <Button type="submit">Update Model settings</Button>
            {/* {loading ? (
              <Spinner toggle={false} />
            ) : (
              <Button type="submit">Update Model settings</Button>
            )} */}
          </div>
        </form>
      )}
    </Formik>
  </div>
</Modal>
<AccordionItem title="Payee Tax">
  {" "}
  <div className="flex flex-col w-full h-full mx-0  overflow-x-auto">
    <table
      className="table overflow-scroll w-full mb-3 text-sm table-auto mt-3"
      role="table"
    >
     
      <tbody>
        {data2.map((item, i) => (
          <tr
            key={i}
            className="inline-flex pr-6 items-center h-12 p-2 space-x-20 border first:mr-5 ju1tify-start"
            role="row"
          >
            <td
              style={{ color }}
              className="text-[#248C0B] inline-block w-60 text-left"
              role="cell"
            >
              {item.col1}
            </td>
            <td
              className="invisible inline-block w-12 text-left"
              role="cell"
            ></td>
            <td
              className="inline-flex justify-center  w-12 border text-left"
              role="cell"
            >
              {item.col3}
            </td>
            <td
              className="inline-flex justify-center border  w-12 text-left"
              role="cell"
            >
              {item.col4}
            </td>{" "}
            {/* <td
            className="inline-flex justify-center border  w-12 text-left"
            role="cell"
          >
            {item.col5}
          </td> */}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</AccordionItem>
<AccordionItem title="Depri Tax">
  {" "}
  <div className="flex flex-col w-full h-full mx-0  overflow-x-auto">
    <table
      className="table overflow-scroll w-full mb-3 text-sm table-auto mt-3"
      role="table"
    >
      {/* <thead className="flex space-y-5">
      <tr
        className="inline-flex pr-6 items-center h-12 p-2 space-x-20 border first:mr-5 ju1tify-start"
        role="row"
      >
        <th
          className="invisible inline-block w-60 text-left"
          role="cell"
        ></th>
        <th
          className="invisible inline-block w-12 text-left"
          role="cell"
        ></th>
        <th className="inline-block w-12 text-left ">Year1</th>
        <th className="inline-block w-12 text-left ">Year2</th>
        <th className="inline-block w-12 text-left ">Year3</th>
      </tr>
    </thead> */}
      <tbody>
        {data3.map((item, i) => (
          <tr
            key={i}
            className="inline-flex pr-6 items-center h-12 p-2 space-x-20 border first:mr-5 ju1tify-start"
            role="row"
          >
            <td
              style={{ color }}
              className="text-[#248C0B] inline-block w-60 text-left"
              role="cell"
            >
              {item.col1}
            </td>
            <td
              className="invisible inline-block w-12 text-left"
              role="cell"
            ></td>
            <td
              className="inline-flex justify-center  w-12 border text-left"
              role="cell"
            >
              {item.col3}
            </td>
            <td
              className="inline-flex justify-center border  w-12 text-left"
              role="cell"
            >
              {item.col4}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</AccordionItem>
</div>