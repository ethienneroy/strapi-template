import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksCarousel extends Schema.Component {
  collectionName: 'components_blocks_carousels';
  info: {
    displayName: 'Carousel';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    slides: Attribute.Component<'blocks.slide', true>;
  };
}

export interface BlocksContactUs extends Schema.Component {
  collectionName: 'components_blocks_contact_uses';
  info: {
    displayName: 'Contact Us';
    icon: 'envelop';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    senderEmail: Attribute.Email;
    phoneNumber: Attribute.String;
    description: Attribute.Text;
  };
}

export interface BlocksCtaCommandLine extends Schema.Component {
  collectionName: 'components_blocks_cta_command_lines';
  info: {
    displayName: 'CtaCommandLine';
    icon: 'code';
    description: '';
  };
  attributes: {
    theme: Attribute.Enumeration<['primary', 'secondary', 'muted']> &
      Attribute.DefaultTo<'primary'>;
    title: Attribute.String;
    text: Attribute.String;
    commandLine: Attribute.Text;
  };
}

export interface BlocksCta extends Schema.Component {
  collectionName: 'components_slices_ctas';
  info: {
    displayName: 'cta';
    icon: 'bullhorn';
  };
  attributes: {
    theme: Attribute.Enumeration<['primary', 'secondary', 'muted']> &
      Attribute.DefaultTo<'muted'>;
    title: Attribute.String;
    text: Attribute.String;
    buttons: Attribute.Component<'shared.button', true>;
  };
}

export interface BlocksFaq extends Schema.Component {
  collectionName: 'components_shared_faqs';
  info: {
    displayName: 'faq';
    icon: 'question';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    theme: Attribute.Enumeration<['primary', 'secondary', 'muted']> &
      Attribute.DefaultTo<'muted'>;
    faq: Attribute.Component<'shared.question-answer', true>;
  };
}

export interface BlocksFeaturesCentered extends Schema.Component {
  collectionName: 'components_blocks_features_centereds';
  info: {
    displayName: 'FeaturesCentered';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    description: Attribute.String;
    features: Attribute.Component<'shared.feature-with-icon', true>;
  };
}

export interface BlocksFeaturesWithImages extends Schema.Component {
  collectionName: 'components_slices_features_with_images';
  info: {
    displayName: 'featuresWithImages';
    icon: 'images';
    description: '';
  };
  attributes: {
    header: Attribute.Component<'shared.header'>;
    text: Attribute.Text & Attribute.Required;
    theme: Attribute.Enumeration<['primary', 'secondary', 'muted']> &
      Attribute.DefaultTo<'primary'>;
    image: Attribute.Media;
    featuresCheck: Attribute.Component<'shared.features-check', true>;
  };
}

export interface BlocksFeatures extends Schema.Component {
  collectionName: 'components_slices_features';
  info: {
    displayName: 'features';
    icon: 'search-plus';
    description: '';
  };
  attributes: {
    theme: Attribute.Enumeration<['primary', 'secondary', 'muted']> &
      Attribute.DefaultTo<'secondary'>;
    header: Attribute.Component<'shared.header'>;
    cards: Attribute.Component<'shared.card', true>;
  };
}

export interface BlocksHero extends Schema.Component {
  collectionName: 'components_slices_heroes';
  info: {
    displayName: 'hero';
    icon: 'pizza-slice';
  };
  attributes: {
    images: Attribute.Media;
    header: Attribute.Component<'shared.header'>;
    text: Attribute.String;
    buttons: Attribute.Component<'shared.button', true>;
  };
}

export interface BlocksPricing extends Schema.Component {
  collectionName: 'components_slices_pricings';
  info: {
    displayName: 'pricing';
    icon: 'money-check-alt';
  };
  attributes: {
    header: Attribute.Component<'shared.header'>;
    general: Attribute.Component<'pricing.infos'>;
    pricingCards: Attribute.Component<'pricing.pricing-cards', true>;
  };
}

export interface BlocksRelatedArticles extends Schema.Component {
  collectionName: 'components_article_related_articles';
  info: {
    displayName: 'relatedArticles';
    icon: 'caret-square-right';
    description: '';
  };
  attributes: {
    header: Attribute.Component<'shared.header'>;
    articles: Attribute.Relation<
      'blocks.related-articles',
      'oneToMany',
      'api::article.article'
    >;
  };
}

export interface BlocksSlide extends Schema.Component {
  collectionName: 'components_blocks_slides';
  info: {
    displayName: 'Slide';
    icon: 'picture';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    title: Attribute.Text;
    description: Attribute.Text;
    button: Attribute.Component<'shared.button'>;
  };
}

export interface BlocksTeam extends Schema.Component {
  collectionName: 'components_slices_teams';
  info: {
    displayName: 'team';
    icon: 'people-carry';
    description: '';
  };
  attributes: {
    header: Attribute.Component<'shared.header'>;
    members: Attribute.Relation<
      'blocks.team',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    buttonLabel: Attribute.String;
  };
}

export interface BlocksTestimonial extends Schema.Component {
  collectionName: 'components_shared_testimonials';
  info: {
    displayName: 'testimonial';
    icon: 'quote-right';
    description: '';
  };
  attributes: {
    theme: Attribute.Enumeration<['primary', 'secondary', 'muted']> &
      Attribute.DefaultTo<'primary'>;
    text: Attribute.Text & Attribute.Required;
    author: Attribute.Relation<
      'blocks.testimonial',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
  };
}

export interface GlobalFooter extends Schema.Component {
  collectionName: 'components_global_footers';
  info: {
    displayName: 'footer';
    icon: 'align-right';
  };
  attributes: {
    footerColumns: Attribute.Component<'shared.footer-columns', true>;
    socialNetworks: Attribute.Component<'shared.social-networks', true>;
    button: Attribute.Component<'shared.button'>;
    terms: Attribute.Component<'shared.link'>;
    privacy: Attribute.Component<'shared.link'>;
    label: Attribute.String;
  };
}

export interface GlobalNavigation extends Schema.Component {
  collectionName: 'components_global_navigations';
  info: {
    displayName: 'navigation';
    icon: 'location-arrow';
  };
  attributes: {
    links: Attribute.Component<'shared.link', true>;
    leftButton: Attribute.Component<'shared.link'>;
    rightButton: Attribute.Component<'shared.link'>;
  };
}

export interface PricingInfos extends Schema.Component {
  collectionName: 'components_shared_infos';
  info: {
    displayName: 'infos';
    icon: 'adjust';
  };
  attributes: {
    durationLabel: Attribute.String & Attribute.Required;
    selectLabel: Attribute.String & Attribute.Required;
    includedlabel: Attribute.String & Attribute.Required;
    additionalInfos: Attribute.String;
    currency: Attribute.String & Attribute.Required;
  };
}

export interface PricingPerks extends Schema.Component {
  collectionName: 'components_shared_perks';
  info: {
    displayName: 'perks';
    icon: 'adjust';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
  };
}

export interface PricingPricingCards extends Schema.Component {
  collectionName: 'components_shared_pricing_cards';
  info: {
    displayName: 'pricingCards';
    icon: 'file-invoice-dollar';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.String;
    punchline: Attribute.String;
    price: Attribute.Integer & Attribute.Required;
    link: Attribute.String & Attribute.Required;
    perks: Attribute.Component<'pricing.perks', true>;
  };
}

export interface SharedButton extends Schema.Component {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'button';
    icon: 'compress';
  };
  attributes: {
    theme: Attribute.Enumeration<['primary', 'secondary', 'muted']> &
      Attribute.Required &
      Attribute.DefaultTo<'primary'>;
    link: Attribute.Component<'shared.link'>;
  };
}

export interface SharedCard extends Schema.Component {
  collectionName: 'components_shared_cards';
  info: {
    displayName: 'card';
    icon: 'sim-card';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.String;
    image: Attribute.Media;
    informations: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          preset: 'rich';
        }
      > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface SharedComment extends Schema.Component {
  collectionName: 'components_shared_comments';
  info: {
    displayName: 'comment';
    icon: 'comment-dots';
  };
  attributes: {
    content: Attribute.Text;
  };
}

export interface SharedFeatureWithIcon extends Schema.Component {
  collectionName: 'components_shared_feature_with_icons';
  info: {
    displayName: 'FeatureWithIcon';
    icon: 'server';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    icon: Attribute.Media;
    description: Attribute.RichText;
  };
}

export interface SharedFeaturesCheck extends Schema.Component {
  collectionName: 'components_shared_features_checks';
  info: {
    displayName: 'featuresCheck';
    icon: 'check';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    guestPrice: Attribute.Decimal;
    memberPrice: Attribute.Decimal;
    description: Attribute.Text;
  };
}

export interface SharedFooterColumns extends Schema.Component {
  collectionName: 'components_shared_footer_columns';
  info: {
    displayName: 'footerColumns';
    icon: 'align-left';
  };
  attributes: {
    links: Attribute.Component<'shared.link', true>;
  };
}

export interface SharedHeader extends Schema.Component {
  collectionName: 'components_shared_headers';
  info: {
    displayName: 'header';
    icon: 'heading';
    description: '';
  };
  attributes: {
    theme: Attribute.Enumeration<['primary', 'secondary', 'muted']> &
      Attribute.DefaultTo<'primary'>;
    label: Attribute.String;
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface SharedLink extends Schema.Component {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'link';
    icon: 'backward';
  };
  attributes: {
    href: Attribute.String & Attribute.Required;
    label: Attribute.String & Attribute.Required;
    target: Attribute.Enumeration<['_blank']>;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedPublication extends Schema.Component {
  collectionName: 'components_shared_publications';
  info: {
    displayName: 'publication';
    icon: 'arrow-up';
  };
  attributes: {
    publish_at: Attribute.DateTime;
    ready: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface SharedQuestionAnswer extends Schema.Component {
  collectionName: 'components_shared_question_answers';
  info: {
    displayName: 'questionAnswer';
    icon: 'question-circle';
    description: '';
  };
  attributes: {
    question: Attribute.String;
    answer: Attribute.RichText;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media & Attribute.Required;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

export interface SharedSocialNetworks extends Schema.Component {
  collectionName: 'components_shared_social_network';
  info: {
    displayName: 'socialNetwork';
    icon: 'network-wired';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
  };
}

export interface SharedTeamCard extends Schema.Component {
  collectionName: 'components_shared_team_cards';
  info: {
    displayName: 'teamCard';
    icon: 'smile';
    description: '';
  };
  attributes: {
    fullname: Attribute.String & Attribute.Required;
    job: Attribute.String & Attribute.Required;
    description: Attribute.String & Attribute.Required;
    socialNetworks: Attribute.Component<'shared.social-networks', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.carousel': BlocksCarousel;
      'blocks.contact-us': BlocksContactUs;
      'blocks.cta-command-line': BlocksCtaCommandLine;
      'blocks.cta': BlocksCta;
      'blocks.faq': BlocksFaq;
      'blocks.features-centered': BlocksFeaturesCentered;
      'blocks.features-with-images': BlocksFeaturesWithImages;
      'blocks.features': BlocksFeatures;
      'blocks.hero': BlocksHero;
      'blocks.pricing': BlocksPricing;
      'blocks.related-articles': BlocksRelatedArticles;
      'blocks.slide': BlocksSlide;
      'blocks.team': BlocksTeam;
      'blocks.testimonial': BlocksTestimonial;
      'global.footer': GlobalFooter;
      'global.navigation': GlobalNavigation;
      'pricing.infos': PricingInfos;
      'pricing.perks': PricingPerks;
      'pricing.pricing-cards': PricingPricingCards;
      'shared.button': SharedButton;
      'shared.card': SharedCard;
      'shared.comment': SharedComment;
      'shared.feature-with-icon': SharedFeatureWithIcon;
      'shared.features-check': SharedFeaturesCheck;
      'shared.footer-columns': SharedFooterColumns;
      'shared.header': SharedHeader;
      'shared.link': SharedLink;
      'shared.meta-social': SharedMetaSocial;
      'shared.publication': SharedPublication;
      'shared.question-answer': SharedQuestionAnswer;
      'shared.seo': SharedSeo;
      'shared.social-networks': SharedSocialNetworks;
      'shared.team-card': SharedTeamCard;
    }
  }
}
