import Vue from 'vue'
import Router from "vue-router";
import firebase from 'firebase';
import Userauth from '../auth/js/index'

import Body from '../components/body'
import Auth from '../auth/auth'

/* Auth */
import login from '../auth/login'
import callback from '../pages/callback'
import Register from '../auth/register'

/* FAQ */
import Faq from '../pages/faq'

/* Support Ticket */
import Support from '../pages/support'

/* maintenance */
import Maintenance from '../pages/maintenance'

/* Error Pages */
import Error400 from '../errors/error_400'
import Error401 from '../errors/error_401'
import Error403 from '../errors/error_403'
import Error404 from '../errors/error_404'
import Error500 from '../errors/error_500'
import Error503 from '../errors/error_503'

/* comingsoon */
import ComingsoonSimple from '../pages/comingsoon/comingsoon_simple'
import ComingsoonImage from '../pages/comingsoon/comingsoon_image'
import ComingsoonVideo from '../pages/comingsoon/comingsoon_video'

/* Dashboards */
import Default from '../pages/dashboard/default'
import Ecommerce from '../pages/dashboard/ecommerce'
import University from '../pages/dashboard/university'
import Bitcoin from '../pages/dashboard/bitcoin'
import Project from '../pages/dashboard/project'
import Server from '../pages/dashboard/server'

/* Widgets */
import GeneralWidgets from '../pages/widgets/general_widgets'
import ChartWidgets from '../pages/widgets/chart_widgets'
/* Base */
import alert from '../pages/base/alert'
import Statecolor from '../pages/base/state_color'
import Helperclasses from '../pages/base/helper_classes'
import Avatars from '../pages/base/avatars'
import Grid from '../pages/base/grid'
import Tagpills from '../pages/base/tag_pills'
import Typography from '../pages/base/typography'
import Progressbar from '../pages/base/progress_bar'
import Modal from '../pages/base/modal'
import Popover from '../pages/base/popover'
import Tooltip from '../pages/base/tooltip'
import Spinners from '../pages/base/loader'
import Dropdown from '../pages/base/dropdown'
import BootstrapTabs from '../pages/base/tab_bootstrap'
import MaterialTabs from '../pages/base/tab_material'
import Accordion from '../pages/base/accordion'
import Boxshadow from '../pages/base/box_shadow'
import Lists from '../pages/base/lists'
import Navs from '../pages/base/navs'
/* advance */
import Scrollable from '../pages/advance/scrollable'
import Sweetalert from '../pages/advance/sweetalert'
import Tree from '../pages/advance/tree'
import Rating from '../pages/advance/rating'
import Pagination from '../pages/advance/pagination'
import Ribbons from '../pages/advance/ribbons'
import Tour from '../pages/advance/tour'
import Rangeslider from '../pages/advance/range_slider'
import Steps from '../pages/advance/steps'
import Breadcrumb from '../pages/advance/breadcrumb'
import Dropzone from '../pages/advance/dropzone'
import Upload from '../pages/advance/upload'
import Sticky from '../pages/advance/sticky'
import Toastr from '../pages/advance/toastr'
import ImageCropper from '../pages/advance/image_cropper'
import Draganddrop from '../pages/advance/draganddrop'
/* charts */
import GoogleChart from '../pages/charts/google_chart'
import Chartjs from '../pages/charts/chartjs'
import Chartist from '../pages/charts/chartist'
/* icons */
import Flag from '../pages/icons/flag'
import Ico from '../pages/icons/ico_icon'
import Themify from '../pages/icons/themify_icon'
import Fontawesome from '../pages/icons/font_awesome'
import FeatherIcon from '../pages/icons/feather_icon'
import WhetherIcon from '../pages/icons/weather'

/* Buttons */
import Default_buttons from '../pages/buttons/default_buttons'
import Flat_buttons from '../pages/buttons/flat_buttons'
import Edge_buttons from '../pages/buttons/edge_buttons'
import Raised_buttons from '../pages/buttons/raised_buttons'
import Group_buttons from '../pages/buttons/group_buttons'
/* Form */
import FormWizrd from '../pages/forms/form_wizard'
import FormValidation from '../pages/forms/form_validation'
import FormBaseInputs from '../pages/forms/form_base_inputs'
import FormCheckboxRadio from '../pages/forms/form_checkbox_radio'
import FormInputGroups from '../pages/forms/form_input_groups'
import FormMegaOptions from '../pages/forms/form_mega_options'
/* Form Widgets */
import FormDatepicker from '../pages/form_widgets/datepicker'
import FormSelect2 from '../pages/form_widgets/select2'
import FormSwitch from '../pages/form_widgets/switch'
import FormTypeahead from '../pages/form_widgets/typeahead'
import FormClipboard from '../pages/form_widgets/clipboard'
import FormTouchspin from '../pages/form_widgets/touchspin'
/* E-Commerce */
import Products from '../pages/ecommerce/products'
import ProductDetails from '../pages/ecommerce/product_details'
import Cart from '../pages/ecommerce/cart'
import Wishlist from '../pages/ecommerce/wishlist'
import Checkout from '../pages/ecommerce/checkout'
import Invoice from '../pages/ecommerce/invoice'
import Success from '../pages/ecommerce/success'
import OrderHistory from '../pages/ecommerce/order_history'
import PaymentDetails from '../pages/ecommerce/payment_details'
/* Chat */
import Chat from '../pages/chat/chat'
/* Email  */
import Email from '../pages/email/app'
/* Cards */
import Basic from '../pages/cards/basic'
import Creative from '../pages/cards/creative'
import Tabbed from '../pages/cards/tabbed'
import Draggable from '../pages/cards/draggable'

/* pricing */
import Pricing from '../pages/pricing/pricing'
/* sample page */
import SamplePage from '../pages/sample_page'
import Todo from '../pages/todo/todo'
import FirebaseTodo from '../pages/todo/firebase_todo'
/* bootstrap tables */
import BootstrapBasic from '../pages/tables/bootstrap/basic'
import BootstrapSizing from '../pages/tables/bootstrap/sizing'
import BootstrapBorder from '../pages/tables/bootstrap/border'
import BootstrapStyling from '../pages/tables/bootstrap/styling'
/* datatable tables */
import DatatableBasic from '../pages/tables/datatable/basic_init'
import DatatableSelectDelete from '../pages/tables/datatable/select_delete'
import FilterTable from '../pages/tables/datatable/filter'
import DatatableExport from '../pages/tables/datatable/data_export'
/* calendar */
import Calendar from '../pages/calendar/fullcalendar'
/* Timeline */
import TimelineOne from '../pages/timeline/timeline_one'
import TimelineTwo from '../pages/timeline/timeline_two'

/* vuejs smart table */
import SmartTable from '../pages/tables/vuejs_smart_table/basic'

/* Editor */
import SimpleEditor from '../pages/editor/simple_editor'
import CkEditor from '../pages/editor/ckeditor.vue'


/* User Profile */
import UserProfile from '../pages/users/profile'
import UserEditProfile from '../pages/users/edit-profile'
import UserCards from '../pages/users/cards'

/* Blogs */
import Blog from '../pages/blogs/blog'
import BlogSingle from '../pages/blogs/blog_single'

/* Maps */
import GoogleMaps from '../pages/maps/vue_google_maps'
import VueLeaflet from '../pages/maps/vue_leaflet'

/* Job Search */
import JobList from '../pages/job/job_list'
import JobDetails from '../pages/job/job_details'
import JobApply from '../pages/job/job_apply'

/* Search */
import Search from '../pages/search'

/* Social App */
import Social from '../pages/social_app'

/* Authentication */
import LoginImage from '../pages/authentication/login_image'
import LoginVideo from '../pages/authentication/login_video'
import RegisterImage from '../pages/authentication/register_image'
import RegisterVideo from '../pages/authentication/register_video'
import Unlock from '../pages/authentication/unlock'
import ForgetPassword from '../pages/authentication/forget_password'
import ResetPassword from '../pages/authentication/reset_password'

/* Learning */
import Learninglist from '../pages/learning/learninglist';
import Coursedetailed from '../pages/learning/coursedetailed';

/* knowledgebase */
import Knowledgebase from '../pages/knowledgebase/knowledgebase';

// Gallery
import GridGallery from '../pages/gallery/grid-gallery';
import GridGalleryDesc from '../pages/gallery/gallery-desc';
import GalleryMasonary from '../pages/gallery/masonary-gallery';
import GalleryMasonaryDesc from '../pages/gallery/masonary-desc';
import HoverEffect from '../pages/gallery/hover-effect';

// component

Vue.use(Router)

const routes = [
{ path: '', redirect: { name: 'default' }},
{
  path: '/dashboard',
  component: Body,
  meta: {
    requiresAuth: true
  },
  children: [
  {
    path: 'default',
    name: 'default',
    component: Default,
    meta: {
      title: 'Default Dashboard | Endless - Premium Admin Template',
    }
  },
  {
    path: 'ecommerce',
    name: 'ecommerce',
    component: Ecommerce,
    meta: {
      title: 'Ecommerce Dashboard | Endless - Premium Admin Template',
    }
  },
  {
    path: 'university',
    name: 'University',
    component: University,
    meta: {
      title: 'University Dashboard | Endless - Premium Admin Template',
    }
  },
  {
    path: 'bitcoin',
    name: 'Bitcoin',
    component: Bitcoin,
    meta: {
      title: 'Bitcoin Dashboard | Endless - Premium Admin Template',
    }
  },
  {
    path: 'project',
    name: 'Project',
    component: Project,
    meta: {
      title: 'Project Dashboard | Endless - Premium Admin Template',
    }
  },
  {
    path: 'server',
    name: 'Server',
    component: Server,
  },
  ]
},
{
  path: '/widgets',
  component: Body,
  children: [
  {
    path: 'general',
    name: 'general',
    component: GeneralWidgets,
    meta: {
      title: 'General Widgets | Endless - Premium Admin Template',
    }
  },
  {
    path: 'chart',
    name: 'chart',
    component: ChartWidgets,
    meta: {
      title: 'Chart Widgets | Endless - Premium Admin Template',
    }
  },
  ]
},
{
  path: '/base',
  component: Body,
  children: [
  {
    path: 'alert',
    name: 'alert',
    component: alert,
    meta: {
      title: 'Alert | Endless - Premium Admin Template',
    }
  },
  {
    path: 'state-color',
    name: 'Statecolor',
    component: Statecolor,
    meta: {
      title: 'Statecolor | Endless - Premium Admin Template',
    }
  },
  {
    path: 'helper-classes',
    name: 'Helperclasses',
    component: Helperclasses,
    meta: {
      title: 'Helperclasses | Endless - Premium Admin Template',
    }
  },
  {
    path: 'avatars',
    name: 'Avatars',
    component: Avatars,
    meta: {
      title: 'Avatars | Endless - Premium Admin Template',
    }
  },
  {
    path: 'grid',
    name: 'Grid',
    component: Grid,
    meta: {
      title: 'Grid | Endless - Premium Admin Template',
    }
  },
  {
    path: 'tag-pills',
    name: 'Tagpills',
    component: Tagpills,
    meta: {
      title: 'Tagpills | Endless - Premium Admin Template',
    }
  },
  {
    path: 'typography',
    name: 'Typography',
    component: Typography,
    meta: {
      title: 'Typography | Endless - Premium Admin Template',
    }
  },
  {
    path: 'progress-bar',
    name: 'Progressbar',
    component: Progressbar,
    meta: {
      title: 'Progressbar | Endless - Premium Admin Template',
    }
  },
  {
    path: 'modal',
    name: 'Modal',
    component: Modal,
    meta: {
      title: 'Modal | Endless - Premium Admin Template',
    }
  },
  {
    path: 'popover',
    name: 'Popover',
    component: Popover,
    meta: {
      title: 'Popover | Endless - Premium Admin Template',
    }
  },
  {
    path: 'tooltip',
    name: 'Tooltip',
    component: Tooltip,
    meta: {
      title: 'Tooltip | Endless - Premium Admin Template',
    }
  },
  {
    path: 'loader',
    name: 'Spinners',
    component: Spinners,
    meta: {
      title: 'Spinners | Endless - Premium Admin Template',
    }
  },
  {
    path: 'dropdown',
    name: 'Dropdown',
    component: Dropdown,
    meta: {
      title: 'Dropdown | Endless - Premium Admin Template',
    }
  },
  {
    path: 'tab-bootstrap',
    name: 'BootstrapTabs',
    component: BootstrapTabs,
    meta: {
      title: 'BootstrapTabs | Endless - Premium Admin Template',
    }
  },
  {
    path: 'tab-material',
    name: 'MaterialTabs',
    component: MaterialTabs,
    meta: {
      title: 'MaterialTabs | Endless - Premium Admin Template',
    }
  },
  {
    path: 'accordion',
    name: 'Accordion',
    component: Accordion,
    meta: {
      title: 'Accordion | Endless - Premium Admin Template',
    }
  },
  {
    path: 'box-shadow',
    name: 'Boxshadow',
    component: Boxshadow,
    meta: {
      title: 'Boxshadow | Endless - Premium Admin Template',
    }
  },
  {
    path: 'lists',
    name: 'Lists',
    component: Lists,
    meta: {
      title: 'Lists | Endless - Premium Admin Template',
    }
  },
  {
    path: 'navs',
    name: 'Navs',
    component: Navs,
    meta: {
      title: 'Navs | Endless - Premium Admin Template',
    }
  }]
},
{
  path: '/advance',
  component: Body,
  children: [
  {
    path: 'scrollable',
    name: 'Scrollable',
    component: Scrollable,
    meta: {
      title: 'Scrollable | Endless - Premium Admin Template',
    }
  },
  {
    path: 'sweetalert',
    name: 'Sweetalert',
    component: Sweetalert,
    meta: {
      title: 'Sweetalert | Endless - Premium Admin Template',
    }
  },
  {
    path: 'tree',
    name: 'Tree',
    component: Tree,
    meta: {
      title: 'Tree | Endless - Premium Admin Template',
    }
  },
  {
    path: 'rating',
    name: 'Rating',
    component: Rating,
    meta: {
      title: 'Rating | Endless - Premium Admin Template',
    }
  },
  {
    path: 'pagination',
    name: 'Pagination',
    component: Pagination,
    meta: {
      title: 'Pagination | Endless - Premium Admin Template',
    }
  },
  {
    path: 'ribbons',
    name: 'Ribbons',
    component: Ribbons,
    meta: {
      title: 'Ribbons | Endless - Premium Admin Template',
    }
  },
  {
    path: 'tour',
    name: 'Tour',
    component: Tour,
    meta: {
      title: 'Tour | Endless - Premium Admin Template',
    }
  },
  {
    path: 'range-slider',
    name: 'Rangeslider',
    component: Rangeslider,
    meta: {
      title: 'Rangeslider | Endless - Premium Admin Template',
    }
  },
  {
    path: 'steps',
    name: 'Steps',
    component: Steps,
    meta: {
      title: 'Steps | Endless - Premium Admin Template',
    }
  },
  {
    path: 'breadcrumb',
    name: 'Breadcrumb',
    component: Breadcrumb,
    meta: {
      title: 'Breadcrumb | Endless - Premium Admin Template',
    }
  },
  {
    path: 'dropzone',
    name: 'Dropzone',
    component: Dropzone,
    meta: {
      title: 'Dropzone | Endless - Premium Admin Template',
    }
  },
  {
    path: 'upload',
    name: 'Upload',
    component: Upload,
    meta: {
      title: 'Upload | Endless - Premium Admin Template',
    }
  },
  {
    path: 'sticky',
    name: 'Sticky',
    component: Sticky,
    meta: {
      title: 'Sticky | Endless - Premium Admin Template',
    }
  },
  {
    path: 'toastr',
    name: 'Toastr',
    component: Toastr,
    meta: {
      title: 'Toastr | Endless - Premium Admin Template',
    }
  },
  {
    path: 'image-cropper',
    name: 'ImageCropper',
    component: ImageCropper,
    meta: {
      title: 'ImageCropper | Endless - Premium Admin Template',
    }
  },
  {
    path: 'dragdrop',
    name: 'Draganddrop',
    component: Draganddrop,
    meta: {
      title: 'Draganddrop | Endless - Premium Admin Template',
    }
  },
  ]
},
{
  path: '/chart',
  component: Body,
  children: [
  {
    path: 'google',
    name: 'Google Chart',
    component: GoogleChart,
    meta: {
      title: 'GoogleChart | Endless - Premium Admin Template',
    }
  },
  {
    path: 'chartjs',
    name: 'Chart Js',
    component: Chartjs,
    meta: {
      title: 'Home Page - Example App',
      metaTags: [
      {
        name: 'description',
        content: 'The home page of our example app.'
      },
      {
        property: 'og:description',
        content: 'The home page of our example app.'
      }
      ]
    }
  },
  {
    path: 'chartist',
    name: 'Chartist',
    component: Chartist,
    meta: {
      title: 'Chartist | Endless - Premium Admin Template',
    }
  },
  ]
},
{
  path: '/gallery',
  component: Body,
  children:[
    {
      path: 'grid-gallery',
      name: 'GridGallery',
      component:GridGallery,
      meta: {
        title: 'GridGallery | Endless - Premium Admin Template',
      }
    },
    {
      path: 'gallery-desc',
      name: 'GridGalleryDesc',
      component:GridGalleryDesc,
      meta: {
        title: 'GridGalleryDesc | Endless - Premium Admin Template',
      }
    },
    {
      path: 'gallery-masonary',
      name: 'GalleryMasonary',
      component:GalleryMasonary,
      meta: {
        title: 'GalleryMasonary | Endless - Premium Admin Template',
      }
    },
    {
      path: 'gallery-masonary-desc',
      name: 'GalleryMasonaryDesc',
      component:GalleryMasonaryDesc,
      
    },
    {
      path: 'hover-effect',
      name: 'HoverEffect',
      component:HoverEffect,
      meta: {
        title: 'HoverEffect | Endless - Premium Admin Template',
      }
    } 
  ]
},
{
  path: '/editor',
  component: Body,
  children:[
    {
      path: 'simple-editor',
      name: 'SimpleEditor',
      component:SimpleEditor,
      meta: {
        title: 'SimpleEditor | Endless - Premium Admin Template',
      }
    },
    {
      path: 'ck-editor',
      name: 'CkEditor',
      component:CkEditor,
       meta: {
        title: 'CkEditor | Endless - Premium Admin Template',
      }
      
    }
  ]
},
{
  path:'/users',
  component: Body,
  children:[
    {
      path: 'profile',
      name: 'UserProfile',
      component:UserProfile,
       meta: {
        title: 'serProfile | Endless - Premium Admin Template',
      }
    },
    {
      path: 'edit',
      name: 'UserEditProfile',
      component:UserEditProfile,
       meta: {
        title: 'serEditProfile | Endless - Premium Admin Template',
      }
    },
    {
      path: 'cards',
      name: 'UserCards',
      component:UserCards,
       meta: {
        title: 'serCards | Endless - Premium Admin Template',
      }
    }
  ]
},
{
  path:'/blog',
  component: Body,
  children:[
    {
      path: 'details',
      name: 'Blog',
      component:Blog,
       meta: {
        title: 'log | Endless - Premium Admin Template',
      }
    },
    {
      path: 'single',
      name: 'BlogSingle',
      component:BlogSingle,
       meta: {
        title: 'logSingle | Endless - Premium Admin Template',
      }
    }
  ]
},
{
  path:'/maps',
  component: Body,
  children:[
    {
      path: 'vue-google-maps',
      name: 'GoogleMaps',
      component:GoogleMaps,
       meta: {
        title: 'oogleMaps | Endless - Premium Admin Template',
      }
    },
    {
      path: 'vue-leaflet-maps',
      name: 'VueLeaflet',
      component:VueLeaflet,
       meta: {
        title: 'ueLeaflet | Endless - Premium Admin Template',
      }
    }
  ]
},
{
  path: '/icons',
  component: Body,
  children:[
  {
    path: 'flag',
    name: 'Flag',
    component: Flag,
     meta: {
        title: 'Flag | Endless - Premium Admin Template',
      }
  },
  {
    path: 'ico',
    name: 'Ico',
    component: Ico,
     meta: {
        title: 'Ico | Endless - Premium Admin Template',
      }
  },
  {
    path: 'themify',
    name: 'Themify',
    component: Themify,
     meta: {
        title: 'Themify | Endless - Premium Admin Template',
      }
  },
  {
    path: 'fontawesome',
    name: 'Fontawesome',
    component: Fontawesome,
     meta: {
        title: 'Fontawesome | Endless - Premium Admin Template',
      }
  },
  {
    path: 'feather_icon',
    name: 'FeatherIcon',
    component: FeatherIcon,
     meta: {
        title: 'FeatherIcon | Endless - Premium Admin Template',
      }
  },
  {
    path: 'whether',
    name: 'WhetherIcon',
    component: WhetherIcon,
     meta: {
        title: 'WhetherIcon | Endless - Premium Admin Template',
      }
  }
  ]
},
{
  path: '/form',
  component: Body,
  children: [
  {
    path: 'wizard',
    name: 'FormWizard',
    component: FormWizrd,
     meta: {
        title: 'FormWizrd | Endless - Premium Admin Template',
      }
  },
  {
    path: 'validation',
    name: 'FormValidation',
    component: FormValidation,
     meta: {
        title: 'FormValidation | Endless - Premium Admin Template',
      }
  },
  {
    path: 'inputs',
    name: 'FormBaseInputs',
    component: FormBaseInputs,
     meta: {
        title: 'FormBaseInputs | Endless - Premium Admin Template',
      }
  },
  {
    path: 'checkbox-radio',
    name: 'FormCheckboxRadio',
    component: FormCheckboxRadio,
     meta: {
        title: 'FormCheckboxRadio | Endless - Premium Admin Template',
      }
  },
  {
    path: 'input-groups',
    name: 'FormInputGroups',
    component: FormInputGroups,
     meta: {
        title: 'FormInputGroups | Endless - Premium Admin Template',
      }
  },
  {
    path: 'mega-options',
    name: 'FormMegaOptions',
    component: FormMegaOptions,
     meta: {
        title: 'FormMegaOptions | Endless - Premium Admin Template',
      }
  },
  {
    path: 'datepicker',
    name: 'FormDatepicker',
    component: FormDatepicker,
     meta: {
        title: 'FormDatepicker | Endless - Premium Admin Template',
      }
  },
  {
    path: 'select2',
    name: 'FormSelect2',
    component: FormSelect2,
     meta: {
        title: 'FormSelect2 | Endless - Premium Admin Template',
      }
  },
  {
    path: 'switch',
    name: 'FormSwitch',
    component: FormSwitch,
     meta: {
        title: 'FormSwitch | Endless - Premium Admin Template',
      }
  },
  {
    path: 'typeahead',
    name: 'FormTypeahead',
    component: FormTypeahead,
     meta: {
        title: 'FormTypeahead | Endless - Premium Admin Template',
      }
  },
  {
    path: 'clipboard',
    name: 'FormClipboard',
    component: FormClipboard,
     meta: {
        title: 'FormClipboard | Endless - Premium Admin Template',
      }
  },
  {
    path: 'touchspin',
    name: 'FormTouchspin',
    component: FormTouchspin,
     meta: {
        title: 'FormTouchspin | Endless - Premium Admin Template',
      }
  },
  {
    path: 'mega-options',
    name: 'Form Mega Options',
    component: FormMegaOptions,
     meta: {
        title: 'FormMegaOptions | Endless - Premium Admin Template',
      }
  }
  ]
},
{
  path: '/table',
  component: Body,
  children: [
  {
    path: 'basic',
    name: 'BootstrapBasic',
    component: BootstrapBasic,
     meta: {
        title: 'BootstrapBasic | Endless - Premium Admin Template',
      }
  },
  {
    path: 'sizing',
    name: 'BootstrapSizing',
    component: BootstrapSizing,
     meta: {
        title: 'BootstrapSizing | Endless - Premium Admin Template',
      }
  },
  {
    path: 'border',
    name: 'BootstrapBorder',
    component: BootstrapBorder,
     meta: {
        title: 'BootstrapBorder | Endless - Premium Admin Template',
      }
  },
  {
    path: 'styling',
    name: 'BootstrapStyling',
    component: BootstrapStyling,
     meta: {
        title: 'BootstrapStyling | Endless - Premium Admin Template',
      }
  },
  {
    path: '/datatable-basic',
    name: 'DatatableBasic',
    component: DatatableBasic,
     meta: {
        title: 'DatatableBasic | Endless - Premium Admin Template',
      }
  },
  {
    path: '/datatable-select-delete',
    name: 'DatatableSelectDelete',
    component: DatatableSelectDelete,
     meta: {
        title: 'DatatableSelectDelete | Endless - Premium Admin Template',
      }
  },
  {
    path: '/filter-table',
    name: 'FilterTable',
    component: FilterTable,
     meta: {
        title: 'FilterTable | Endless - Premium Admin Template',
      }
  },
  {
    path: '/datatable-export',
    name: 'DatatableExport',
    component: DatatableExport,
     meta: {
        title: 'DatatableExport | Endless - Premium Admin Template',
      }
  },
  {
    path: 'smarttable',
    name: 'SmartTable',
    component: SmartTable,
     meta: {
        title: 'SmartTable | Endless - Premium Admin Template',
      }
  },
  ]
},
{
  path: '/buttons',
  component: Body,
  children:[
  {
    path: 'default',
    name: 'default_buttons',
    component: Default_buttons,
     meta: {
        title: 'Default_buttons | Endless - Premium Admin Template',
      }
  },
  {
    path: 'flat',
    name: 'flat_buttons',
    component: Flat_buttons,
     meta: {
        title: 'Flat_buttons | Endless - Premium Admin Template',
      }
  },
  {
    path: 'edge',
    name: 'edge_buttons',
    component: Edge_buttons,
     meta: {
        title: 'Edge_buttons | Endless - Premium Admin Template',
      }
  },
  {
    path: 'raised',
    name: 'raised_buttons',
    component: Raised_buttons,
     meta: {
        title: 'Raised_buttons | Endless - Premium Admin Template',
      }
  },
  {
    path: 'group',
    name: 'group_buttons',
    component: Group_buttons,
     meta: {
        title: 'Group_buttons | Endless - Premium Admin Template',
      }
  }
  ]
},
{
  path: '/ecommerce',
  component: Body,
  children: [

  {
    path: 'product',
    name: 'Product',
    component: Products,
     meta: {
        title: 'Products | Endless - Premium Admin Template',
      }
  },
  {
    path: 'details/:id',
    name: 'Product Details',
    component: ProductDetails,
     meta: {
        title: 'ProductDetails | Endless - Premium Admin Template',
      }
  },
  {
    path: 'cart',
    name: 'Cart',
    component: Cart,
     meta: {
        title: 'Cart | Endless - Premium Admin Template',
      }
  },
  {
    path: 'wishlist',
    name: 'Wishlist',
    component: Wishlist,
     meta: {
        title: 'Wishlist | Endless - Premium Admin Template',
      }
  },
  {
    path: 'checkout',
    name: 'Checkout',
    component: Checkout,
     meta: {
        title: 'Checkout | Endless - Premium Admin Template',
      }
  },
  {
    path: 'invoice',
    name: 'Invoice',
    component: Invoice,
     meta: {
        title: 'Invoice | Endless - Premium Admin Template',
      }
  },
  {
    path: 'success',
    name: 'Success',
    component: Success,
     meta: {
        title: 'Success | Endless - Premium Admin Template',
      }
  },
  {
    path: 'order/history',
    name: 'Order History',
    component: OrderHistory,
     meta: {
        title: 'OrderHistory | Endless - Premium Admin Template',
      }
  },
  {
    path: 'payment/details',
    name: 'payment Details',
    component: PaymentDetails,
     meta: {
        title: 'PaymentDetails | Endless - Premium Admin Template',
      }
  },
  ]
},
{
  path:'/cards',
  component:Body,
  children:[
  {
    path:'basic',
    name:'Basic',
    component:Basic,
    meta: {
      title: 'BootstrapStyling | Endless - Premium Admin Template',
    }
  },
  {
    path:'creative',
    name:'Creative',
    component:Creative,
    meta: {
      title: 'Creative | Endless - Premium Admin Template',
    }
  },
  {
    path:'tabbed',
    name:'Tabbed',
    component:Tabbed,
    meta: {
      title: 'Tabbed | Endless - Premium Admin Template',
    }
  },
  {
    path:'draggable',
    name:'Draggable',
    component:Draggable,
    meta: {
      title: 'Draggable | Endless - Premium Admin Template',
    }
  }
  ]
},
{
  path: '/app',
  component: Body,
  children: [
  {
    path: 'todo',
    name: 'todo',
    component: Todo,
     meta: {
        title: 'Todo | Endless - Premium Admin Template',
      }
  },
  {
    path: 'firebase-todo',
    name: 'FirebaseTodo',
    component: FirebaseTodo,
     meta: {
        title: 'FirebaseTodo | Endless - Premium Admin Template',
      }
  },
  {
    path: 'chat',
    name: 'chat',
    component: Chat,
     meta: {
        title: 'Chat | Endless - Premium Admin Template',
      }
  },
  {
    path: 'email',
    name: 'Email',
    component: Email,
     meta: {
        title: 'Email, | Endless - Premium Admin Template',
      }
  },
  {
    path:'calendar',
    name:'Calendar',
    component:Calendar,
    meta: {
      title: 'Calendar | Endless - Premium Admin Template',
    }
  }
  ]
},
{
  path: '/timeline',
  component: Body,
  children: [
  {
    path: 'one',
    name: 'TimelineOne',
    component: TimelineOne,
     meta: {
        title: 'TimelineOne | Endless - Premium Admin Template',
      }
  },
  {
    path: 'two',
    name: 'TimelineTwo',
    component: TimelineTwo,
    meta: {
      title: ' TimelineTwo | Endless - Premium Admin Template',
    }
  }
  ]
},
{
  path: '/auth',
  component: Auth,
  children: [
  {
    path: 'login',
    name: 'Login 1',
    component: login,
    meta: {
      title: ' login | Endless - Premium Admin Template',
    }
  },
  {
    path: 'register',
    name: 'register 1',
    component: Register,
    meta: {
      title: ' Register | Endless - Premium Admin Template',
    }
  }
  ]
},
{
  path: '/pages',
  component: Body,
  children:[
    {
      path:'/pages/sample-page',
      name:'SamplePage',
      component:SamplePage,
      meta: {
      title: 'SamplePage | Endless - Premium Admin Template',
    }
    },
    {
      path:'/pages/pricing',
      name:'Pricing',
      component:Pricing,
      meta: {
      title: 'Pricing | Endless - Premium Admin Template',
    }
    }
  ]
},
{
  path: '/callback',
  name: 'callback',
  component: callback,
  meta: {
      title: 'Auth0',
  }
},
{
  path: '/pages',
  component: Body,
  children:[
    {
      path:'/pages/faq',
      name:'Faq',
      component:Faq,
      meta: {
      title: 'Faq | Endless - Premium Admin Template',
    }
    },
    {
      path:'/pages/support',
      name:'Support',
      component:Support,
      meta: {
      title: 'Support | Endless - Premium Admin Template',
    }
    },
    {
      path:'/pages/social-app',
      name:'Social',
      component:Social,
      meta: {
      title: 'Social | Endless - Premium Admin Template',
    }
    }
  ]
},
{
  path:'/job',
  component:Body,
  children:[
    {
      path:'/job/list',
      name:'JobList',
      component:JobList,
      meta: {
      title: 'JobList | Endless - Premium Admin Template',
    }
    },
    {
      path:'/job/details/:id',
      name:'JobDetails',
      component:JobDetails,
      meta: {
      title: 'JobDetails, | Endless - Premium Admin Template',
    },
      props:true
    },
    {
      path:'/job/apply/:id',
      name:'JobApply',
      component:JobApply,
      meta: {
      title: 'JobApply, | Endless - Premium Admin Template',
    },
      props:true
    }
  ]
},
{
  path:'/search',
  component:Body,
  children:[
    {
      path:'/pages/search',
      name:'Search',
      component:Search,
      meta: {
      title: 'Search | Endless - Premium Admin Template',
    }
    }
  ]
},
{
  path:'/learning',
  component:Body,
  children:[
    {
      path:'/learning/list',
      name:'Learninglist',
      component:Learninglist,
      meta: {
      title: 'Learninglist | Endless - Premium Admin Template',
    }
    },
    {
      path:'/learning/details/:id',
      name:'Coursedetailed',
      component:Coursedetailed,
      meta: {
      title: 'Coursedetailed, | Endless - Premium Admin Template',
      },
      props:true
    }
  ]
},
{
  path:'/knowledgebase',
  component:Body,
  children:[
    {
      path:'/',
      name:'Knowledgebase',
      component:Knowledgebase,
      meta: {
      title: 'Knowledgebase | Endless - Premium Admin Template',
    }
    }
  ]
},
{
  path:'/error-400',
  name:'Error400',
  component:Error400,
  meta: {
      title: 'Error400 | Endless - Premium Admin Template',
    }
},
{
  path:'/error-401',
  name:'Error401',
  component:Error401,
  meta: {
      title: 'Error401 | Endless - Premium Admin Template',
    }
},
{
  path:'/error-403',
  name:'Error403',
  component:Error403,
  meta: {
      title: 'Error403 | Endless - Premium Admin Template',
    }
},
{
  path:'/error-404',
  name:'Error404',
  component:Error404,
  meta: {
      title: 'Error404 | Endless - Premium Admin Template',
    }
},
{
  path:'/error-500',
  name:'Error500',
  component:Error500,
  meta: {
      title: 'Error500 | Endless - Premium Admin Template',
    }
},
{
  path:'/error-503',
  name:'Error503',
  component:Error503,
  meta: {
      title: 'Error503 | Endless - Premium Admin Template',
    }
},
{
  path:'/maintenance',
  name:'Maintenance',
  component:Maintenance,
  meta: {
      title: 'Maintenance | Endless - Premium Admin Template',
    }
},
{
  path:'/comingsoon/comingsoon-simple',
  name:'ComingsoonSimple',
  component:ComingsoonSimple,
  meta: {
      title: 'ComingsoonSimple | Endless - Premium Admin Template',
    }
},
{
  path:'/comingsoon/comingsoon-image',
  name:'ComingsoonImage',
  component:ComingsoonImage,
  meta: {
      title: 'ComingsoonImage | Endless - Premium Admin Template',
    }
},
{
  path:'/comingsoon/comingsoon-video',
  name:'ComingsoonVideo',
  component:ComingsoonVideo,
  meta: {
      title: 'ComingsoonVideo | Endless - Premium Admin Template',
    }
},
{
  path:'/authentication/login/image',
  name:'LoginImage',
  component:LoginImage,
  meta: {
      title: 'LoginImage | Endless - Premium Admin Template',
    }
},
{
  path:'/authentication/login/video',
  name:'LoginVideo',
  component:LoginVideo,
  meta: {
      title: 'LoginVideo | Endless - Premium Admin Template',
    }
},
{
  path:'/authentication/register/image',
  name:'RegisterImage',
  component:RegisterImage,
  meta: {
      title: 'RegisterImage | Endless - Premium Admin Template',
    }
},
{
  path:'/authentication/register/video',
  name:'RegisterVideo',
  component:RegisterVideo,
  meta: {
      title: 'RegisterVideo | Endless - Premium Admin Template',
    }
},
{
  path:'/authentication/unlockuser',
  name:'Unlock',
  component:Unlock,
  meta: {
      title: 'Unlock | Endless - Premium Admin Template',
    }
},
{
  path:'/authentication/forgetpassword',
  name:'ForgetPassword',
  component:ForgetPassword,
  meta: {
      title: 'ForgetPassword | Endless - Premium Admin Template',
    }
},
{
  path:'/authentication/resetpassword',
  name:'ResetPassword',
  component:ResetPassword,
  meta: {
      title: 'ResetPassword | Endless - Premium Admin Template',
    }
},

];

const router = new Router({
  routes,
  base: '/',
  mode: 'history',
  linkActiveClass: "active",
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
});

router.beforeEach((to, from, next) => {
  firebase.auth().onAuthStateChanged(() => {
    if(to.meta.title)
      document.title = to.meta.title;
    const CurrentUser = firebase.auth().currentUser;    
    const  path = ['/auth/login','/auth/register'];
    if (path.includes(to.path) || to.path === "/callback" || CurrentUser || Userauth.isAuthenticatedUser()){
      return next();
    }
    next('/auth/login')
  });
});

export default router
