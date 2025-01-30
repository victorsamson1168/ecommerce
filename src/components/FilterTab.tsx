// Standard packages
import { FC, useEffect } from 'react';

// Third-party packages
import {
  FilterAbout,
  FilterAllIcon,
  FilterCultureFitIcon,
  FilterDesignIcon,
  FilterEngineeringIcon,
  FilterFinanceIcon,
  FilterHRIcon,
  FilterManagementIcon,
  FilterMarketingIcon,
  FilterNewAllIcon,
  FilterNewCognitiveAbility,
  FilterNewDesignIcon,
  FilterNewEngineeringIcon,
  FilterNewFinanceIcon,
  FilterNewHRIcon,
  FilterNewManagementIcon,
  FilterNewMarketingIcon,
  FilterNewSalesIcon,
  FilterSalesIcon,
} from './Icons';

interface IFilter {
  label: string;
  value: string;
  icon: JSX.Element;
}

// PropTypes
type FilterTabProps = {
  /** The selected tab  */
  selectedTab: string;
  /** set selected tab  */
  setSelectedTab: any;
  /** filter type */
  filterType: 'searchTalent' | 'assessment';

  /** make this tab active on load, if present */
  defaultActive?: string;
};
export const filterAssessTabs: Array<IFilter> = [
  {
    icon: <FilterNewAllIcon />,
    label: 'All',
    value: '',
  },
  {
    icon: <FilterNewSalesIcon />,
    label: 'Sales',
    value: 'SALES',
  },
  {
    icon: <FilterNewEngineeringIcon />,
    label: 'Engineering',
    value: 'ENGINEERING',
  },
  {
    icon: <FilterNewDesignIcon />,
    label: 'Design',
    value: 'DESIGN',
  },
  {
    icon: <FilterNewHRIcon />,
    label: 'HR',
    value: 'HR',
  },
  // {
  //   icon: <FilterPersonalityIcon />,
  //   label: 'Personality',
  //   value: 'PERSONALITY',
  // },
  {
    icon: <FilterNewMarketingIcon />,
    label: 'Marketing',
    value: 'MARKETING',
  },
  {
    icon: <FilterNewFinanceIcon />,
    label: 'Finance',
    value: 'FINANCE',
  },
  {
    icon: <FilterNewManagementIcon />,
    label: 'Management',
    value: 'MANAGEMENT',
  },
  {
    icon: <FilterCultureFitIcon />,
    label: 'Culture fit',
    value: 'CULTURE_FIT',
  },
  {
    icon: <FilterNewCognitiveAbility />,
    label: 'Cognitive',
    value: 'COGNITIVE',
  },
  {
    icon: <FilterAbout />,
    label: 'About',
    value: 'ABOUT',
  },
];
const FilterTab: FC<FilterTabProps> = (props: FilterTabProps) => {
  /** props */
  const { selectedTab, setSelectedTab, filterType, defaultActive = '' } = props;

  const filterSearchTalentTabs: Array<IFilter> = [
    {
      icon: <FilterAllIcon />,
      label: 'All',
      value: '',
    },
    {
      icon: <FilterSalesIcon />,
      label: 'Sales',
      value: 'SALES',
    },
    {
      icon: <FilterEngineeringIcon />,
      label: 'Engineering',
      value: 'ENGINEERING',
    },
    {
      icon: <FilterDesignIcon />,
      label: 'Design',
      value: 'DESIGN',
    },
    {
      icon: <FilterHRIcon />,
      label: 'HR',
      value: 'HR',
    },
    {
      icon: <FilterMarketingIcon />,
      label: 'Marketing',
      value: 'MARKETING',
    },
    {
      icon: <FilterFinanceIcon />,
      label: 'Finance',
      value: 'FINANCE',
    },
    {
      icon: <FilterManagementIcon />,
      label: 'Management',
      value: 'MANAGEMENT',
    },
  ];

  /** useEffect hooks  */
  useEffect(() => {
    if (defaultActive) {
      const contains = filterSearchTalentTabs.find(
        elem => elem.value.toLowerCase() === defaultActive.trim().toLowerCase()
      );
      if (contains) {
        setSelectedTab(contains.value);
      }
    }
  }, []);
  const renderFilterTab = (filter: {
    icon: any;
    label: string;
    value: string;
  }) => {
    return (
      <div
        key={filter?.value}
        className={`group w-[113.45px]  rounded h-[100px] flex-grow text-grayscale_500 bg-white flex flex-col gap-2 items-center py-4 px-2 cursor-pointer hover:!border-primary_300 hover:!bg-primary_100 hover:!bg-opacity-[16%] hover:!text-primary_300
          
          ${
            selectedTab === filter.value
              ? 'border-primary_300 !bg-primary_extended_100 text-primary_300'
              : ''
          }`}
        onClick={() => {
          setSelectedTab(filter.value);
        }}
        aria-hidden={true}
      >
        <div>{filter.icon}</div>
        <p
          className={`text-grayscale_900 text-label_semibold text-center group-hover:!text-primary_300 ${
            selectedTab === filter.value ? 'text-primary_300' : ''
          }`}
        >
          {filter.label}
        </p>
      </div>
    );
  };

  return (
    <div className='flex no-scrollbar overflow-x-auto p-4 bg-white gap-1 rounded'>
      {filterType === 'assessment' && filterAssessTabs.map(renderFilterTab)}
      {filterType === 'searchTalent' &&
        filterSearchTalentTabs.map(renderFilterTab)}
    </div>
  );
};

export default FilterTab;
