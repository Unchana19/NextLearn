"use client";

import { useFilters } from "@/hooks/useFilters";
import {
  Button,
  Select,
  SelectItem,
  Slider,
  Spinner,
  Switch,
} from "@nextui-org/react";
import { FC } from "react";

interface Props {
  totalCount: number;
}

const Filters: FC<Props> = ({ totalCount }: Props): JSX.Element => {
  const {
    genderList,
    orderByList,
    filters,
    selectAge,
    selectGender,
    selectOrder,
    switchWithPhoto,
    isPending,
  } = useFilters();

  return (
    <div className="shadow-md p-4 rounded-b-xl">
      <div className="flex flex-row justify-around items-center">
        <div className="flex gap-2 items-center">
          <div className="text-secondary font-semibold text-xl">
            Results: {totalCount}
          </div>
          {isPending && <Spinner size="sm" color="secondary" />}
        </div>
        <div className="flex gap-2 items-center">
          <div>Gender: </div>
          {genderList.map(({ icon: Icon, value }) => (
            <Button
              key={value}
              size="sm"
              isIconOnly
              color={filters.gender.includes(value) ? "secondary" : "default"}
              onClick={() => selectGender(value)}
            >
              <Icon size={24} />
            </Button>
          ))}
        </div>
        <div className="flex flex-row items-center gap-2 w-1/5">
          <Slider
            label="Age range"
            aria-label="Age range"
            color="secondary"
            size="sm"
            minValue={18}
            maxValue={100}
            defaultValue={filters.ageRange}
            onChangeEnd={(value) => selectAge(value as number[])}
          />
        </div>
        <Switch
          onChange={switchWithPhoto}
          color="secondary"
          size="sm"
          defaultSelected
        >
          With photo
        </Switch>
        <div className="w-1/4">
          <Select
            size="sm"
            fullWidth
            placeholder="Order by"
            variant="bordered"
            color="secondary"
            label="Order by"
            aria-label="Order by selector"
            selectedKeys={new Set([filters.orderBy])}
            onSelectionChange={selectOrder}
          >
            {orderByList.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </Select>
        </div>
      </div>
    </div>
  );
};

export default Filters;
