// Standard packages

import { ArrowDownIcon, ErrorIcon, SearchIcon } from '@/components/Icons';
import {
  ChangeEventHandler,
  Dispatch,
  KeyboardEventHandler,
  SetStateAction,
  useState,
} from 'react';

// Third-party packages

// Custom packages
import ClickAwayListener from '@/components/ClickAwayListener';
import clsx from 'clsx';
import { Validator } from 'utils/validators';
import Button from './Button';
import MultiRangeSlider from './DoubleSlider';
import TextField from './TextField2';
// PropTypes
// type FilterObjectType
type FilterType = {
  filterObject: any;
  isModal?: boolean;
  /** selected filters array */
  selectedFilters?: {
    value: string;
    selected: string[];
  }[];
  /** main search */
  search: string;
  searchPlaceholder?: string;
  searchedFields?: any;
  experience?: any;
  locationList?: any[];
  /** Callback to set the selected filters */
  setSelectedFilter?: Dispatch<
    SetStateAction<
      {
        value: string;
        selected: string[];
      }[]
    >
  >;
  /** Callback to edit main search */
  setSearch: Dispatch<SetStateAction<string>>;
  setFilterObj: any;
  /** Callback to handle serach */
  onSearch?: any;
  setExperience?: Dispatch<
    SetStateAction<{
      experienceStart: string;
      experienceEnd: string;
      tempMin: string;
      tempMax: string;
    }>
  >;
  setLocationList?: Dispatch<SetStateAction<any[]>>;
};
export default function FilterAndSearch(props: Readonly<FilterType>) {
  /** pop-states */
  const {
    filterObject,
    selectedFilters: selectedFitlers,
    search,
    searchPlaceholder,
    searchedFields,
    experience,
    locationList,
    isModal = true,
  } = props;
  /** prop-actions */
  const {
    setFilterObj,
    setSelectedFilter,
    setSearch,
    onSearch,
    setExperience,
    setLocationList,
  } = props;
  const [currentOpenField, setCurrentOpenField] = useState('');
  const [leftSelectedLabel, setLeftSelectedLabel] = useState(
    filterObject?.leftField?.options.find(
      (item: any) => item.value === filterObject?.leftField?.selected
    ).label ?? ''
  );
  /** useEffect hooks */

  // useEffect(() => {
  //   const firstChild = document.getElementById(
  //     'select' + filterObject?.fields[0]?.label
  //   );

  //   filterObject.fields.forEach((element: any) => {
  //     const child = document.getElementById('select' + element.label);
  //     (element.label, child?.offsetTop, child?.offsetLeft);
  //   });
  // }, []);

  const isOnSecondLine = (label: string) => {
    const firstChild = document.getElementById(
      'select' + filterObject?.fields[0]?.label
    );

    const child = document.getElementById('select' + label);
    return firstChild?.offsetTop !== child?.offsetTop;
  };

  /** custom handlers */

  const getTotalAppliedFilters = () => {
    let filterCount: number = 0;
    const temp = selectedFitlers?.map((item: any) => {
      if (item.selected.length > 0) filterCount += 1;
      return item;
    });
    if (
      experience &&
      (experience.experienceStart !== '0' || experience.experienceEnd !== '30')
    ) {
      filterCount += 1;
    }
    if (locationList && locationList.length > 0) {
      filterCount += 1;
    }
    return filterCount.toString();
  };

  const handleSearchTextChange: ChangeEventHandler<
    HTMLInputElement
  > = event => {
    setSearch(event.target.value ?? '');
  };

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = event => {
    if (event.code === 'Enter' && onSearch) {
      onSearch();
    }
  };
  const updateField = (fieldName: string, value: string) => {
    if (!selectedFitlers || !setSelectedFilter) return;
    const index = selectedFitlers.findIndex(
      (item: any) => item.value === fieldName
    );
    let newSelectedFilters = [...selectedFitlers];
    const oldSelected = selectedFitlers[index].selected;
    newSelectedFilters[index].selected = oldSelected.includes(value)
      ? oldSelected.filter((item: any) => item !== value)
      : [...oldSelected, value];
    setSelectedFilter(newSelectedFilters);
    // setTemp(!temp);
  };
  const clearSelectedFilter = (fieldName: string) => {
    if (!selectedFitlers || !setSelectedFilter) return;
    const index = selectedFitlers.findIndex(
      (item: any) => item.value === fieldName
    );
    const newSelectedFilters = [...selectedFitlers];
    newSelectedFilters[index].selected = [];
    setSelectedFilter(newSelectedFilters);
  };

  const clearAllFilters = () => {
    if (!selectedFitlers || !setSelectedFilter) return;
    const newSelectedFilters = selectedFitlers.map((item: any) => {
      let newSelected = item;
      newSelected.selected = [];
      return newSelected;
    });
    if (experience && setExperience) {
      setExperience({
        experienceStart: '0',
        experienceEnd: '30',
        tempMax: '30',
        tempMin: '0',
      });
    }
    if (locationList && setLocationList) {
      setLocationList([]);
    }
    filterObject?.fields.forEach((element: any) => {
      element.setSearch && element.setSearch('');
    });
    setSelectedFilter(newSelectedFilters);
    setSearch && setSearch('');
  };

  const setFieldName = (fieldName: string) => {
    if (fieldName === currentOpenField) setCurrentOpenField('');
    else setCurrentOpenField(fieldName);
  };

  const handleLeftSelectChnage = (text: string) => {
    let newFilter = filterObject;
    newFilter.leftField.selected = text;
    const newLeftLabel = filterObject.leftField.options.find(
      (item: any) => item.value === text
    ).label;
    setFilterObj({ ...newFilter });
    setLeftSelectedLabel(newLeftLabel);
  };
  const getSlecetedFilterByValue = (fieldValue: string) => {
    if (selectedFitlers) {
      const element = selectedFitlers.find(
        (item: any) => item.value === fieldValue
      );
      return element?.selected ?? [];
    }
    return [];
  };

  const getLabel = (item: any) => {
    if (item?.label) return item?.label;
    if (item?.value) return item?.value;
    return item.name;
  };

  const handleMaxExperience = (text: string) => {
    if (
      !text ||
      (Validator.isValidNumber(text) && Number(text) <= 30 && Number(text) >= 0)
    ) {
      setExperience && setExperience({ ...experience, tempMax: text });
    }
  };
  const handleMinExperience = (text: string) => {
    if (
      !text ||
      (Validator.isValidNumber(text) && Number(text) <= 30 && Number(text) >= 0)
    ) {
      setExperience && setExperience({ ...experience, tempMin: text });
    }
  };

  const isValidRange = (min: string, max: string) => {
    if (min && max) {
      if (Number(max) < Number(min)) {
        return false;
      } else {
        return true;
      }
    }
    return true;
  };
  const handleExperience = (obj: any) => {
    setExperience &&
      setExperience({
        ...experience,
        experienceStart: obj.min,
        experienceEnd: obj.max,
        tempMax: obj.max,
        tempMin: obj.min,
      });
  };
  /** custom renderer */

  const renderCheckboxes = (
    suggestions: any,
    fieldValue: string,
    label: string,
    selectedSuggestions: any[],
    field: any,
    index: number
  ) => {
    if (fieldValue === 'experience') {
      return (
        <ClickAwayListener onClickAway={() => setCurrentOpenField('')}>
          <div
            className={clsx([
              'top-[72px] p-4 flex flex-col w-[400px] gap-y-4 absolute z-10 bg-white shadow-[4px_4px_16px_0px_rgba(86,91,97,0.14)] rounded border border-grayscale_extended_100',

              {
                'right-0': index > 4 && !isOnSecondLine(label),
              },
            ])}
          >
            <div className='flex justify-between items-center mb-[54px]'>
              <p className='text-caption_medium text-grayscale_600'>
                Set experience
              </p>
              <button
                className='text-label_medium px-4 py-1 text-grayscale_900'
                onClick={() =>
                  setExperience &&
                  setExperience({
                    tempMax: '30',
                    tempMin: '0',
                    experienceStart: '0',
                    experienceEnd: '30',
                  })
                }
              >
                Reset selection
              </button>
            </div>
            <MultiRangeSlider
              maxWidth='368px'
              min={
                experience.experienceStart ? experience.experienceStart : '0'
              }
              max={experience.experienceEnd ? experience.experienceEnd : '30'}
              minLimit={0}
              maxLimit={30}
              onChange={handleExperience}
            />
            <div className='flex gap-x-6 mt-6'>
              <TextField
                label='Min. Experience'
                placeholder='Ex. 2'
                value={experience.tempMin}
                onChange={handleMinExperience}
                fullWidth
                regex={!isValidRange(experience.tempMin, experience.tempMax)}
                // className='border-none rounded-full mt-4 '
              />
              <TextField
                placeholder='Ex. 2'
                label='Max. Experience'
                value={experience.tempMax}
                onChange={handleMaxExperience}
                fullWidth
                regex={!isValidRange(experience.tempMin, experience.tempMax)}
                // className='border-none rounded-full mt-4 '
              />
            </div>
            {!isValidRange(experience.tempMin, experience.tempMax) && (
              <div className='flex gap-x-1'>
                <ErrorIcon />

                <span className='text-caption_medium text-negative'>
                  Min experience cannot be more than Max experience.
                </span>
              </div>
            )}
          </div>
        </ClickAwayListener>
      );
    } else if (fieldValue === 'location') {
      return (
        <ClickAwayListener onClickAway={() => setCurrentOpenField('')}>
          <div
            className={clsx([
              'top-[72px] p-4 flex flex-col w-[400px] gap-y-4 absolute z-10 bg-white shadow-[4px_4px_16px_0px_rgba(86,91,97,0.14)] rounded border border-grayscale_extended_100',

              {
                'right-0': index > 4 && !isOnSecondLine(label),
              },
            ])}
          >
            {field.setSearch && (
              <div className='relative py-2 pr-2 px-2  w-full border border-grayscale_extended_100 rounded'>
                <SearchIcon className='w-6 h-6 absolute z-10 ml-1 text-grayscale_900' />
                <input
                  type='text'
                  value={searchedFields[field.searchField] ?? ''}
                  placeholder={`${
                    filterObject?.leftField?.selected === 'QUESTIONS'
                      ? 'Search questions'
                      : filterObject?.leftField?.selected === 'TEMPLATES'
                      ? 'Search templates'
                      : 'Search'
                  }`}
                  onChange={event => field.setSearch(event.target.value)}
                  className={
                    'shadow-none outline-none pl-10 pr-1 disabled:bg-grayscale_extended_200 disabled:cursor-not-allowed !w-full'
                  }
                  onKeyDown={handleKeyDown}
                />
              </div>
            )}
            <div className='flex justify-between items-center'>
              <p className='text-caption_medium text-grayscale_600'>
                {'All ' + label}
              </p>
              <button
                className='text-label_medium px-4 py-1 text-grayscale_900'
                onClick={() => {
                  setLocationList && setLocationList([]);
                }}
              >
                {'Clear all'}
              </button>
            </div>
            <div className='flex flex-col max-h-[160px] overflow-y-auto'>
              {locationList &&
                locationList?.map((suggestion: any, index: number) => (
                  <li
                    key={suggestion?.value}
                    className='flex gap-x-1 items-center'
                  >
                    <input
                      type='checkbox'
                      className='checkbox m-1'
                      checked={true}
                      onChange={() => {
                        locationList &&
                          setLocationList &&
                          setLocationList(prev =>
                            prev.filter(
                              location => location.id !== suggestion.id
                            )
                          );
                      }}
                      id={suggestion.id}
                    />
                    <label
                      htmlFor={suggestion.id}
                      className='text-label_regular text-grayscale_900 cursor-pointer'
                    >
                      {suggestion.value}
                    </label>
                  </li>
                ))}
              {suggestions
                ?.filter(
                  (item: any) =>
                    !locationList?.find(
                      (location: any) => location.id === item.id
                    )
                )
                ?.map((suggestion: any, index: number) => (
                  <li
                    key={suggestion?.value}
                    className='flex gap-x-1 items-center'
                  >
                    <input
                      type='checkbox'
                      className='checkbox m-1'
                      checked={false}
                      onChange={() =>
                        setLocationList &&
                        locationList &&
                        setLocationList([...locationList, suggestion])
                      }
                      id={getLabel(suggestion)}
                    />
                    <label
                      htmlFor={getLabel(suggestion)}
                      className='text-label_regular text-grayscale_900 cursor-pointer'
                    >
                      {getLabel(suggestion)}
                    </label>
                  </li>
                ))}
            </div>
          </div>
        </ClickAwayListener>
      );
    }
    return (
      <ClickAwayListener onClickAway={() => setCurrentOpenField('')}>
        <div
          className={clsx([
            'top-[72px] p-4 flex flex-col w-[400px] gap-y-4 absolute z-10 bg-white shadow-[4px_4px_16px_0px_rgba(86,91,97,0.14)] rounded border border-grayscale_extended_100 ',

            {
              'right-0': index > 4 && !isOnSecondLine(label),
            },
          ])}
        >
          {field.setSearch && (
            <div className='relative py-2 pr-2 px-2 w-full border border-grayscale_extended_100 rounded '>
              <SearchIcon className='w-6 h-6 absolute z-10 ml-1 text-grayscale_900' />
              <input
                type='text'
                value={searchedFields[field.searchField] ?? ''}
                placeholder={`${
                  filterObject?.leftField?.selected === 'QUESTIONS'
                    ? 'Search questions'
                    : filterObject?.leftField?.selected === 'TEMPLATES'
                    ? 'Search templates'
                    : 'Search'
                }`}
                onChange={event => field.setSearch(event.target.value)}
                className={
                  'outline-none pl-10 pr-1 disabled:bg-grayscale_extended_200 disabled:cursor-not-allowed !w-full '
                }
                onKeyDown={handleKeyDown}
              />
            </div>
          )}
          <div className='flex justify-between items-center'>
            <p className='text-caption_medium text-grayscale_600'>
              {(field.setSearch && searchedFields[field.searchField] === ''
                ? 'Popular '
                : 'All ') + label}
            </p>
            <button
              className='text-label_medium px-4 py-1 text-grayscale_900 hover:text-grayscale_900'
              onClick={() => clearSelectedFilter(fieldValue)}
            >
              {'Clear all'}
            </button>
          </div>
          <div className='flex flex-col max-h-[160px] overflow-y-auto'>
            {field?.setSearch &&
              getSlecetedFilterByValue(fieldValue)?.map(
                (suggestion: any, index: number) => (
                  <li
                    key={suggestion?.value}
                    className='flex gap-x-1 items-center'
                  >
                    <input
                      type='checkbox'
                      className='checkbox m-1'
                      checked={true}
                      onChange={() => updateField(fieldValue, suggestion)}
                      id={suggestion}
                    />
                    <label
                      htmlFor={suggestion}
                      className='text-label_regular text-grayscale_900 cursor-pointer'
                    >
                      {suggestion}
                    </label>
                  </li>
                )
              )}
            {!field?.setSearch &&
              suggestions?.map((suggestion: any, index: number) => (
                <li
                  key={suggestion?.value}
                  className='flex gap-x-1 items-center'
                >
                  <input
                    type='checkbox'
                    className='checkbox m-1'
                    checked={getSlecetedFilterByValue(fieldValue).includes(
                      suggestion?.value
                    )}
                    onChange={() => updateField(fieldValue, suggestion?.value)}
                    name={
                      suggestion?.label ??
                      suggestion?.value ??
                      suggestions?.name
                    }
                    id={
                      suggestion?.label ??
                      suggestion?.value ??
                      suggestions?.name
                    }
                  />
                  <label
                    htmlFor={
                      suggestion?.label ??
                      suggestion?.value ??
                      suggestions?.name
                    }
                    className='text-label_regular text-grayscale_900 cursor-pointer
                    '
                  >
                    {suggestion?.label ??
                      suggestion?.value ??
                      suggestions?.name}
                  </label>
                </li>
              ))}
            {field?.setSearch &&
              suggestions
                ?.filter(
                  (item: any) =>
                    !getSlecetedFilterByValue(fieldValue).includes(
                      getLabel(item)
                    )
                )
                ?.map((suggestion: any, index: number) => (
                  <li
                    key={suggestion?.value}
                    className='flex gap-x-1 items-center'
                  >
                    <input
                      type='checkbox'
                      className='checkbox m-1'
                      checked={false}
                      onChange={() =>
                        updateField(fieldValue, getLabel(suggestion))
                      }
                      id={getLabel(suggestion)}
                    />
                    <label
                      htmlFor={getLabel(suggestion)}
                      className='text-label_regular text-grayscale_900 cursor-pointer'
                    >
                      {getLabel(suggestion)}
                    </label>
                  </li>
                ))}
          </div>
        </div>
      </ClickAwayListener>
    );
  };
  return (
    <div className='w-full  sticky top-20 z-[9999]  px-4 md:px-0'>
      {/* <div className='w-full h-[126px] bg-[linear-gradient(180deg,_#F6F7F9_11.11%,_rgba(246,247,249,0)_124.31%)]  top-20 absolute z-[10]'></div> */}
      <div className='flex flex-col bg-white rounded shadow-[0_12px_24px_-4px_rgba(82,98,119,0.08),0_4px_6px_-2px_rgba(82,98,119,0.10),0_24px_12px_0px_rgba(246,247,249,0.95)] border border-grayscale_extended_100 sticky top-20  z-[11] drop-shadow-[0_0_8px_rgba(12,21,29,0.08)]'>
        {/* <div className='p-4   flex gap-x-2'>
        {filterObject.leftField && (
          <Select
            width={'w-[148px]'}
            padding={'py-2.5 px-4 '}
            value={leftSelectedLabel}
            options={filterObject.leftField.options}
            optionTop={'top-14'}
            maxHeight='max-h-[200px]'
            border={false}
            menu={false}
            onChange={handleLeftSelectChnage}
            className='!bg-white !border-r !border-grayscale_extended_200 !rounded-[0px] '
            titleFont='text-bodyS_semibold'
          />
        )}
        <div className='relative py-2   w-full flex'>
          <SearchIcon className='w-6 h-6 absolute z-10 ml-1 text-grayscale_900' />
          <input
            type='text'
            value={search ?? ''}
            placeholder={searchPlaceholder ?? 'Search'}
            onChange={handleSearchTextChange}
            className={
              'shadow-none outline-none pl-10 pr-1 disabled:bg-grayscale_extended_200 disabled:cursor-not-allowed !w-full'
            }
            onKeyDown={handleKeyDown}
          />
          {isModal && (
            <div
              className=' h-[20px] w-[20px] bg-grayscale_extended_400 flex items-center justify-center rounded-[50%] cursor-pointer'
              onClick={onModalClose}
            >
              <CrossWhiteIcon />
            </div>
          )}
        </div>
      </div> */}
        {filterObject?.fields && (
          <div className='flex gap-2 p-4 overflow-x- h-fit flex-wrap items-center '>
            {filterObject?.fields?.map((field: any, index: number) => (
              <div
                key={field?.label}
                className='relative flex-1 md:flex-none'
                id={'select' + field?.label}
              >
                <button
                  className={`flex justify-between text-grayscale_900  md:min-w-[180px] px-4 py-3 border w-full bg-white ${
                    field?.label === currentOpenField
                      ? 'border-primary_extended_600'
                      : ''
                  } border border-grayscale_extended_100 rounded flex-1`}
                  onClick={() => setFieldName(field?.label)}
                >
                  <div className='w-fit flex gap-x-2 items-center'>
                    <p className='text-label_semibold'>{field?.label}</p>
                    {getSlecetedFilterByValue(field.value).length !== 0 && (
                      <span className='flex justify-center items-center rounded-full bg-grayscale_900 h-5 w-5 text-caption_semibold text-white'>
                        {getSlecetedFilterByValue(field.value).length}
                      </span>
                    )}
                    {field?.value === 'location' &&
                      locationList &&
                      locationList.length > 0 && (
                        <span className='flex justify-center items-center rounded-full bg-grayscale_900 h-5 w-5 text-caption_semibold text-white'>
                          {locationList.length}
                        </span>
                      )}
                    {field?.value === 'experience' &&
                      experience &&
                      (experience?.experienceStart !== '0' ||
                        experience.experienceEnd !== '30') && (
                        <span className='flex justify-center items-center rounded-full bg-grayscale_900 h-5 w-5 text-caption_semibold text-white'>
                          {1}
                        </span>
                      )}
                  </div>
                  <ArrowDownIcon
                    className={clsx([
                      'duration-300',
                      'ease-in-out',
                      'w-5',
                      'h-5',
                      'ml-2',
                      'text-grayscale_extended_700',
                      {
                        'rotate-[180deg]': field?.label === currentOpenField,
                      },
                    ])}
                  />
                </button>
                {field?.label === currentOpenField &&
                  renderCheckboxes(
                    field?.suggestions,
                    field?.value,
                    field?.label,
                    field?.selectedSuggestions,
                    field,
                    index
                  )}
              </div>
            ))}
            {/* {!isModal && (
            <Button variant='tertiary' onClick={onModalOpen}>
              <FilterIcon />
              <p className='text-grayscale_900'>+4 More</p>
            </Button>
          )} */}
          </div>
        )}

        {isModal && filterObject.fields && (
          <div className='flex flex-row-reverse text-label_medium px-4 items-center border-t-[1px] border-grayscale_extended_100  p-4 gap-2'>
            <Button
              // variant='tertiary'
              size='medium'
              className='!bg-grayscale_900 !text-label_medium !text-white  hover:!bg-opacity-[0.8]'
              onClick={clearAllFilters}
              // disabled={getTotalAppliedFilters() === '0'}
            >
              {`Search `}
            </Button>
            <Button
              variant='tertiary'
              size='medium'
              className='!text-label_medium !text-grayscale_900  hover:!bg-grayscale_extended_50'
              onClick={clearAllFilters}
              disabled={getTotalAppliedFilters() === '0'}
            >
              {`Clear all (${getTotalAppliedFilters()}) `}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
