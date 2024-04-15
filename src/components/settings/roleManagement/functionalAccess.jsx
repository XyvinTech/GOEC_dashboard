import { Controller } from "react-hook-form";

import { allPermissions } from "./role";

import {
  Table,
  TableContainer,
  TableHeader,
  HeaderCell,
  TableBody,
  TableCell,
} from "../../../ui/styledTable";
import { PinkSwitch } from "../../../ui/PinkSwitch";

const headers = ["Permissions", "View", "Modify"];

function FunctionalAccess({ control,datas, isUpdate }) {
  return (
    <>
      <div style={{ maxHeight: "300px", overflowY: "auto" }}>
        <TableContainer>
          <Table>
            <TableHeader>
              <tr>
                {headers.map((header) => (
                  <HeaderCell key={header}>{header}</HeaderCell>
                ))}
              </tr>
            </TableHeader>

            <TableBody>
              {allPermissions.map((permission, index) => (
                <tr key={permission.id}>
                  <TableCell>{permission.name}</TableCell>
                  {
                    permission.permissionArray.map((item) => (
                      <TableCell>
                        <Controller
                          name={`functionalPermissions.${index}.${item.label}`}
                          control={control}
                          defaultValue={isUpdate ? datas.includes(item.value) : false} // Initial state
                          render={({ field }) => (
                            <PinkSwitch
                              color="secondary"
                              {...field}
                              defaultChecked={isUpdate ? datas.includes(item.value) : false}
                            />
                          )}
                        />
                      </TableCell>
                    ))
                  }
                  {/* <TableCell>
                    <Controller
                      name={`functionalPermissions.${index}.view`}
                      control={control}
                      defaultValue={false} // Initial state
                      render={({ field }) => (
                        <PinkSwitch
                          color="secondary"
                        />
                      )}
                    />
                  </TableCell>
                  <TableCell>
                    <Controller
                      name={`functionalPermissions.${index}.modify`}
                      control={control}
                      defaultValue={false} // Initial state
                      render={({ field }) => (
                        <PinkSwitch
                          color="secondary"
                        />
                      )}
                    />
                  </TableCell> */}
                  <Controller
                    name={`functionalPermissions.${index}.functionName`}
                    control={control}
                    defaultValue={permission.id}
                    render={({ field }) => <input type="hidden" {...field} />}
                  />
                </tr>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export default FunctionalAccess;

