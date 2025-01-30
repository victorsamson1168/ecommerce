'use client';

// Standard packages
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

// Third-party packages
import { openLeftSideNavState } from '@/app/atom';
import { useQueryClient } from '@tanstack/react-query';
import clsx from 'clsx';
import dayjs from 'dayjs';
import { useRecoilState } from 'recoil';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Custom packages
import { StarIcon, WalletIcon } from '@/icons';
import { useUser } from '@/lib/queries';
import Avatar from './Avatar';
import Button from './Button';
import Tooltip2 from './Tooltip2';

import {
  AppsIcon,
  DoubleCaretIcon,
  EmailIcon,
  HamburgerIcon,
  LogoIcon,
  MoveRightIcon,
  NotificationIcon,
  SearchTalentsIcon,
  SettingIcon,
  UpdatedArrowDownIcon,
} from './Icons';

/** props type */
type DashBoardNavProps = {
  /** children */
  children: ReactNode;
  /** pathname */
  currentPath?: string;
  /** If overflow is 'true' children become overflow, default is true */
  overflow?: boolean;
};
export default function DashBoardNav(props: DashBoardNavProps) {
  /** props states */
  const { children, currentPath, overflow = true } = props;
  /** third-party hooks */
  const pathname = usePathname();
  const router = useRouter();
  const params = useSearchParams();
  const queryClient = useQueryClient();
  const { t } = useTranslation();

  /** custom hooks */
  const { data: user, isError: userError, isLoading: loadingUser } = useUser();

  /** useState hooks */
  const [signupRecommend, setSignupRecommend] = useState(false);
  const [desktopRecommend, setDesktopRecommend] = useState<
    string | undefined
  >();

  const [selectedMenu, setSelectedMenu] = useState<string | undefined>();

  const [noticeIndex, setNoticeIndex] = useState(0);
  /** recoil hooks */
  const [openLeftSideNav, setOpenLeftSideNav] =
    useRecoilState(openLeftSideNavState);

  const firstMenus = [
    {
      id: '/app',
      icon: (
        <Tooltip2
          label={
            openLeftSideNav === 236
              ? undefined
              : t('tooltip.people_search', { ns: 'navigation' })
          }
          position='right'
        >
          <SearchTalentsIcon className='w-5 h-5 shrink-0' />
        </Tooltip2>
      ),
      label: t('menu.people_search', { ns: 'navigation' }),
      subItems: [
        {
          id: ['/app', '/app/talents'],
          exact: true,
          link: '/app',
          label: t('submenu.find_talents', { ns: 'navigation' }),
          mainMenuId: 'talentSearch',
        },
        // {
        //   id: ['/app/recommended-groups'],
        //   exact: true,
        //   link: '/app/recommended-groups',
        //   label: 'Recommended Groups',
        //   mainMenuId: 'recommendedGroups',
        // },
        {
          id: ['/app/talents/saved'],
          link: '/app/talents/saved',
          label: t('submenu.saved_profiles', { ns: 'navigation' }),
          mainMenuId: 'talentSearch',
        },
        {
          id: ['/app/meetings'],
          link: '/app/meetings',
          label: t('submenu.meeting_requests', { ns: 'navigation' }),
          mainMenuId: 'talentSearch',
        },
      ],
    },
    // {
    //   id: 'skillTestAi',
    //   icon: (
    //     <Tooltip2
    //       label={openLeftSideNav === 236 ? undefined : 'Skill Tests'}
    //       position='right'
    //     >
    //       <AssessmentIcon className='w-5 h-5 shrink-0' />
    //     </Tooltip2>
    //   ),
    //   label: 'Skill Tests',

    //   subItems: [
    //     {
    //       id: '/app/skill-test/question',
    //       link: '/app/skill-test/question',
    //       label: 'Questions',
    //       mainMenuId: 'skillTestAi',
    //     },
    //     {
    //       id: '/app/skill-test/templates-list',
    //       link: '/app/skill-test/templates-list',
    //       label: 'Template',
    //       mainMenuId: 'skillTestAi',
    //     },
    //     {
    //       id: '/app/skill-test/list',
    //       link: '/app/skill-test/list',
    //       label: 'My Library',
    //       mainMenuId: 'skillTestAi',
    //     },
    //   ],
    // },
  ];

  const secondMenus = [
    {
      id: '/app/notifications',
      link: '/app/notifications',
      icon: (
        <Tooltip2
          label={
            openLeftSideNav === 236
              ? undefined
              : t('tooltip.notifications', { ns: 'navigation' })
          }
          position='right'
        >
          <NotificationIcon className='w-5 h-5 shrink-0' />
        </Tooltip2>
      ),
      label: t('menu.notifications', { ns: 'navigation' }),
    },

    {
      id: '/app/sequences',
      link: '/app/sequences',
      icon: (
        <Tooltip2
          label={
            openLeftSideNav === 236
              ? undefined
              : t('tooltip.campaigns', { ns: 'navigation' })
          }
          position='right'
        >
          <EmailIcon className='w-5 h-5 shrink-0' />
        </Tooltip2>
      ),
      label: t('menu.campaigns', { ns: 'navigation' }),
    },
    {
      id: '/app/wallet',
      link: '/app/wallet',
      icon: (
        <Tooltip2
          label={
            openLeftSideNav === 236
              ? undefined
              : t('tooltip.wallet', { ns: 'navigation' })
          }
          position='right'
        >
          <WalletIcon className='w-5 h-5 shrink-0' />
        </Tooltip2>
      ),
      label: t('menu.wallet', { ns: 'navigation' }),
    },
    {
      id: '/app/integrations',
      link: '/app/integrations',
      icon: (
        <Tooltip2
          label={
            openLeftSideNav === 236
              ? undefined
              : t('tooltip.data_integration', { ns: 'navigation' })
          }
          position='right'
        >
          <AppsIcon className='w-5 h-5 shrink-0' />
        </Tooltip2>
      ),
      label: t('menu.data_integration', { ns: 'navigation' }),
    },

    {
      id: '/app/profile',
      link: '/app/profile',
      icon: (
        <Tooltip2
          label={
            openLeftSideNav === 236
              ? undefined
              : t('tooltip.settings', { ns: 'navigation' })
          }
          position='right'
        >
          <SettingIcon className='w-5 h-5 shrink-0' />
        </Tooltip2>
      ),
      label: t('menu.settings', { ns: 'navigation' }),
    },
  ];

  const notices = [t('homepage.ribbon', { ns: 'navigation' })];

  /** useEffect hooks */

  /** custom handlers */

  const handleMenuClick = (menu: any) => {
    if (menu.link === '/assess/create') {
      if (!user && userError) {
        handleOpenSignupRecommend();
      } else if (window.innerWidth <= 768) {
        // user가 있고 태블릿 사이즈 이하일 경우
        handleOpenDesktopRecommend(
          '시험 생성 및 편집은 데스크탑에서만 가능해요. 더 나은 경험을 위해 데스크탑에서 진행해주세요!'
        );
      } else {
        router.push(menu.link);
      }
    } else {
      router.push(menu.link);
    }
  };

  const handleCloseSignupRecommend = () => setSignupRecommend(false);
  const handleOpenSignupRecommend = () => setSignupRecommend(true);
  const handleOpenDesktopRecommend = (text: string) =>
    setDesktopRecommend(text);
  const handleCloseDesktopRecommend = () => setDesktopRecommend(undefined);

  const handlePackageUpgrade = () => {
    window.open('https://redrob.io/demo', '_blank');
  };

  const handleMainMenuClick = (menu: any) => {
    handleDrawerOpen();
    if (menu.link) {
      handleMenuClick(menu);
    } else if (
      menu?.subItems &&
      menu?.subItems[0] &&
      !(openLeftSideNav === 236)
    ) {
      handleMenuClick(menu?.subItems[0]);
    }

    setSelectedMenu(prevMenu => (prevMenu === menu.id ? undefined : menu.id));
    localStorage.setItem(
      'subMenu',
      selectedMenu === menu.id ? undefined : menu.id
    );
  };

  const handleSubMenuClick = (menu: any) => {
    if (menu.link) handleMenuClick(menu);
  };

  const handleDrawerClose = () => {
    setOpenLeftSideNav(64);
    localStorage.setItem('calcContainerSize', '64');
  };

  const handleDrawerOpen = () => {
    const timer = setTimeout(() => setOpenLeftSideNav(236), 150);
    localStorage.setItem('calcContainerSize', '236');

    return () => clearTimeout(timer);
  };

  const handleLogout = () => {
    localStorage.removeItem('access_token_jp');
    queryClient.clear();
    // router.push('/');
    router.refresh();
  };

  /** custom renderers */
  const renderMenus = (menuItem: any, index: number) => {
    return (
      <div
        key={menuItem?.id}
        className={clsx([
          'px-4 truncate',
          {
            'pt-1': index > 0,
          },
        ])}
      >
        <div
          onClick={() => handleMainMenuClick(menuItem)}
          className={clsx([
            'flex items-center justify-center py-2 rounded text-grayscale_600 cursor-pointer',
            'hover:bg-grayscale_800 hover:bg-opacity-[8%] active:!bg-opacity-[18%]',
            {
              'bg-grayscale_800 bg-opacity-[8%] text-grayscale_900':
                (pathname.includes(menuItem?.link) ||
                  selectedMenu === menuItem.id) &&
                ((!menuItem?.subItems && openLeftSideNav === 236) ||
                  !(openLeftSideNav === 236)),
            },
            {
              'px-2 gap-x-2': openLeftSideNav === 236,
            },
          ])}
        >
          {menuItem.icon}
          <span
            className={clsx(
              'text-label_semibold whitespace-nowrap transition-all duration-0 ease-linear flex-grow',
              'truncate',
              {
                'w-auto opacity-100 visible': openLeftSideNav === 236,
                'max-w-0 opacity-0 invisible': !(openLeftSideNav === 236),
              }
            )}
          >
            {menuItem.label}
          </span>
          {openLeftSideNav === 236 && menuItem?.subItems?.length > 0 && (
            <UpdatedArrowDownIcon
              className={clsx(
                'ml-auto text-grayscale_600 transition-transform duration-200',
                {
                  'rotate-180': selectedMenu === menuItem.id,
                }
              )}
            />
          )}
        </div>
        {/* 해당 메뉴 항목이 클릭될 때만 나타나는 하위 리스트 */}
        {selectedMenu &&
          selectedMenu === menuItem.id &&
          menuItem?.subItems?.length > 0 &&
          openLeftSideNav === 236 && (
            <div className='space-y-1 pt-1'>
              {menuItem.subItems.map(renderSubmenu)}
            </div>
          )}
      </div>
    );
  };

  const renderSubmenu = (subItem: any) => {
    return (
      <div
        key={subItem?.link}
        className={clsx([
          'flex items-center gap-x-2 py-2 pl-9 rounded text-grayscale_600 cursor-pointer',
          'hover:bg-grayscale_800 hover:bg-opacity-[8%] active:!bg-opacity-[18%]',
          {
            'bg-grayscale_800 bg-opacity-[8%] text-grayscale_900':
              Array.isArray(subItem?.id)
                ? subItem.id.some((id: string) => pathname === id)
                : pathname === subItem?.id,
          },
        ])}
        onClick={() => handleSubMenuClick(subItem)}
      >
        <span className='text-label_semibold'>{subItem.label}</span>
      </div>
    );
  };

  const renderPricingPlan = () => {
    if (user) {
      return (
        <div className='p-4'>
          {user?.pricingPlan === null || user?.pricingPlan?.code == 'trial' ? (
            <img
              className={clsx([
                {
                  'w-auto opacity-100 visible block': !(
                    openLeftSideNav === 236
                  ),
                  'w-0 opacity-0 invisible hidden': openLeftSideNav === 236,
                },
                'transition-all duration-0 ease-linear',
              ])}
              src={'/app/images-jp/freePlan.svg'}
              alt={t('pricing.alt_free', { ns: 'navigation' })}
            />
          ) : (
            <img
              className={clsx([
                {
                  'w-auto opacity-100 visible block': !(
                    openLeftSideNav === 236
                  ),
                  'w-0 opacity-0 invisible hidden': openLeftSideNav === 236,
                },
                'transition-all duration-0 ease-linear',
              ])}
              src={'/app/images-jp/pricingPlanLogo.svg'}
              alt={t('pricing.alt_pro', { ns: 'navigation' })}
            />
          )}

          <div
            className={clsx([
              'rounded p-4 space-y-4',
              {
                'w-auto opacity-100 visible block': openLeftSideNav === 236,
                'w-0 opacity-0 invisible hidden': !(openLeftSideNav === 236),
              },
              'transition-all duration-0 ease-linear',
            ])}
            style={{
              backgroundImage: `${
                user?.pricingPlan === null || user?.pricingPlan?.code == 'trial'
                  ? 'url("/app/images-jp/freePlanBG.svg")'
                  : 'url("/app/images-jp/pro-package.svg")'
              }`,
            }}
          >
            <div className={`flex gap-x-2 items-center`}>
              {user?.pricingPlan === null ||
              user?.pricingPlan?.code == 'trial' ? (
                <img
                  src={'/app/images-jp/freePlan.svg'}
                  alt={t('pricing.alt_free', { ns: 'navigation' })}
                />
              ) : (
                <div className='w-8 h-8'>
                  <img
                    src={'/app/images-jp/pricingPlanLogo.svg'}
                    alt={t('pricing.alt_pro', { ns: 'navigation' })}
                  />
                </div>
              )}
              <div>
                {user?.pricingPlan === null ||
                user?.pricingPlan?.code == 'trial' ? (
                  <div className='flex flex-col gap-y-1'>
                    <div className='text-caption_semibold'>
                      {t('pricing.free_plan', { ns: 'navigation' })}
                    </div>
                    <div className='text-caption_medium text-grayscale_extended_500'>
                      {t('pricing.limited_access', { ns: 'navigation' })}
                    </div>
                  </div>
                ) : (
                  <div className='flex flex-col gap-y-1'>
                    <div className='text-caption_semibold'>
                      {t('pricing.professional_plan', { ns: 'navigation' })}
                    </div>
                    <div className='text-caption_regular text-grayscale_extended_500'>
                      {user?.pricingPlan?.expiry &&
                      new Date(user.pricingPlan.expiry) > new Date() ? (
                        t('pricing.expires_on', {
                          ns: 'navigation',
                          date: dayjs(user.pricingPlan.expiry).format(
                            'YYYY-MM-DD'
                          ),
                        })
                      ) : (
                        <div className='text-caption_medium text-accent_400'>
                          {t('pricing.expired', { ns: 'navigation' })}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* {(user?.pricingPlan === null ||
              user?.pricingPlan?.code == 'trial') && (
              <Button
                size='small'
                className='w-full !text-caption_semibold'
                onClick={() => {
                  setisPricingPlan(true);
                }}
              >
                {t('pricing.upgrade', { ns: 'navigation' })}
              </Button>
            )}
            {user?.pricingPlan?.expiry &&
              new Date(user?.pricingPlan?.expiry) < new Date() && (
                <Button
                  size='small'
                  className='w-full !text-caption_semibold'
                  onClick={() => {
                    setisPricingPlan(true);
                  }}
                >
                  {t('pricing.renew', { ns: 'navigation' })}
                </Button>
              )} */}
          </div>
        </div>
      );
    }
  };

  const renderProfileMenu = () => {
    if (user && pathname !== '/app/auth/logout') {
      return (
        <div className='flex gap-x-2 items-center border-t border-grayscale_200 p-4 pb-0'>
          <Avatar
            alt={user?.firstName}
            src={user?.profileURL}
            size='medium'
            variant='circle'
          />
          <div
            className={clsx([
              'truncate w-full flex justify-between items-center text-caption_semibold whitespace-nowrap',
              'transition-all duration-0 ease-linear',
              {
                'w-auto opacity-100 visible block': openLeftSideNav === 236,
                'w-0 opacity-0 invisible hidden': !(openLeftSideNav === 236),
              },
            ])}
          >
            <div className='truncate max-w-[150px]'>
              <label className='text-caption_semibold truncate'>
                {user?.firstName} {user?.lastName + ' '}
              </label>
              <p className='text-caption_regular text-grayscale_600 truncate'>
                {user?.email}
              </p>
            </div>
            <button
              className=' ml-4 mt-2 text-primary_300 flex items-center'
              onClick={() => handleLogout()}
            >
              <MoveRightIcon />
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div
          className={clsx([
            'flex flex-col space-y-2 items-center px-4',
            'transition-all duration-0 ease-linear',
            {
              'w-auto opacity-100 visible block': openLeftSideNav === 236,
              'w-0 opacity-0 invisible hidden': !(openLeftSideNav === 236),
            },
          ])}
        >
          <Link
            href={{
              pathname: '/app/auth/signup',
              query: { next: pathname },
            }}
            passHref
            className='w-full'
          >
            <Button size='small' variant='secondary' className='w-full'>
              {t('buttons.signup', { ns: 'common' })}
            </Button>
          </Link>
          <Link
            href={{ pathname: '/app/auth/login', query: { next: pathname } }}
            passHref
            className='w-full'
          >
            <Button size='small' className='w-full'>
              {t('buttons.login', { ns: 'common' })}
            </Button>
          </Link>
        </div>
      );
    }
  };

  const renderWorkSpace = () => {
    return (
      <>
        <a href='/' className={clsx(['flex items-center justify-center'])}>
          <div className='border border-grayscale_200 rounded p-[6px] w-8 h-8'>
            <LogoIcon className='w-5 h-5' />
          </div>
          <span
            className={clsx(
              'text-label_semibold whitespace-nowrap transition-all duration-0 ease-linear flex-grow',
              {
                'w-auto opacity-100 visible pl-2': openLeftSideNav === 236,
                'w-0 opacity-0 invisible': !(openLeftSideNav === 236),
              }
            )}
          >
            Redrob
          </span>
        </a>
        <DoubleCaretIcon
          className={clsx([
            'icon text-grayscale_600',
            {
              hidden: !(openLeftSideNav === 236),
            },
          ])}
          onClick={handleDrawerClose}
        />
      </>
    );
  };

  const renderNotices = (item: string, index: number) => (
    <div
      key={index}
      className={`absolute w-full flex items-center justify-start  gap-x-1 text-label_medium transition-transform duration-700 ease-linear ${
        index === noticeIndex
          ? 'translate-y-0 opacity-100' // 중간에 보임
          : index === (noticeIndex - 1 + notices.length) % notices.length
          ? '-translate-y-full opacity-0' // 위로 사라짐
          : 'translate-y-full opacity-0' // 아래 대기
      }`}
    >
      <StarIcon className='text-secondary w-5 h-5' />
      <p>{item}</p>
    </div>
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setNoticeIndex(prevIndex => (prevIndex + 1) % notices?.length); // 순환 로직
    }, 2000); // 2초마다 전환
    return () => clearInterval(interval); // 메모리 누수 방지
  }, [notices?.length]);

  useEffect(() => {
    const calcContainerSize = localStorage?.getItem('calcContainerSize');
    const subMenu = localStorage?.getItem('subMenu');

    if (calcContainerSize === null) {
      localStorage.setItem('calcContainerSize', '64');
      setOpenLeftSideNav(64);
    } else if (calcContainerSize === '240') {
      // handling cache of old sizes of 240
      localStorage.setItem('calcContainerSize', '236');
    } else {
      setOpenLeftSideNav(Number(calcContainerSize));
    }

    if (subMenu === pathname) {
      setSelectedMenu(subMenu);
    } else {
      setSelectedMenu('/app');
    }
  }, []);

  // a workaround for the hydration error for server side content and client side content mismatch
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    return null;
  }

  return (
    <>
      <div className='min-h-screen w-full overflow-hidden'>
        <div
          className='fixed left-0 border-x border-grayscale_200 bg-white z-0 flex h-full py-4 drop-shadow-[0_0_8px_rgba(12,21,29,0.08)]'
          aria-hidden={true}
        >
          <nav
            className={`relative transition-all duration-[200ms] ease-linear bg-white flex flex-col`}
            style={{
              width: `${openLeftSideNav}px`,
            }}
          >
            <div
              className={clsx([
                'w-full h-fit flex items-center pb-4 px-4 transition-all  duration-[200ms] ease-linear',
                {
                  'justify-between': openLeftSideNav === 236,
                  'justify-center': !(openLeftSideNav === 236),
                },
              ])}
            >
              {renderWorkSpace()}
            </div>
            <div
              className={clsx([
                'py-4 border-t border-grayscale_200 overflow-y-auto overflow-x-hidden',
              ])}
            >
              {firstMenus.map(renderMenus)}
              <div className='w-full bg-grayscale_200 h-[1px] my-4' />
              {user
                ? secondMenus.map(renderMenus)
                : secondMenus.slice(0, 4).map(renderMenus)}
            </div>
            <div className='absolute bottom-0 left-0 w-full h-fit bg-white'>
              {renderPricingPlan()}
              {renderProfileMenu()}
            </div>
          </nav>
        </div>
        <div
          id='contents'
          className={clsx([
            'relative w-full transition-all duration-[0ms] ease-linear',
          ])}
          style={{
            width: `calc(100% - ${openLeftSideNav}px)`,
            transform: `translateX(${openLeftSideNav}px)`,
          }}
        >
          {/* Sticky Header */}
          <div
            className={clsx([
              'sticky top-0 z-10 w-full h-16 bg-[#2e3642] text-white flex transition-all duration-[0ms] ease-linear items-center px-4 py-[14px]',
              {
                'justify-between': !(openLeftSideNav === 236),
                'justify-end': openLeftSideNav === 236,
              },
            ])}
            style={{
              marginLeft: openLeftSideNav ? '0px' : '0px',
              width: `calc(100% - ${openLeftSideNav ? '0px' : '0px'})`,
            }}
          >
            <HamburgerIcon
              className={clsx([
                'icon',
                {
                  hidden: openLeftSideNav === 236,
                },
              ])}
              onClick={handleDrawerOpen}
            />
            <div
              className={clsx([
                'relative bg-white rounded bg-opacity-[8%] w-[560px]   transition-all duration-[0ms] ease-linear h-9 p-2 overflow-hidden',
              ])}
            >
              {notices.map(renderNotices)}
            </div>
          </div>
          {/* Scrollable Content */}
          <div
            id='dashboardNav'
            className={clsx([
              'h-[calc(100vh-64px)] transition-width duration-[0ms] ease-linear',
              { 'overflow-y-auto': overflow },
            ])}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
