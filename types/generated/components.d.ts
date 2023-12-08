import type { Schema, Attribute } from '@strapi/strapi';

export interface EnhancedprofilecomponentsComponent1 extends Schema.Component {
  collectionName: 'components_enhancedprofilecomponents_component_1s';
  info: {
    displayName: 'Component 1';
  };
  attributes: {
    OverviewImages: Attribute.Media;
    OverviewHeader: Attribute.String;
    OverviewText: Attribute.Blocks;
  };
}

export interface EnhancedprofilecomponentsComponent2 extends Schema.Component {
  collectionName: 'components_enhancedprofilecomponents_component_2s';
  info: {
    displayName: 'Component 2';
  };
  attributes: {
    CampusLifeHeader: Attribute.String;
    CampusLifeText: Attribute.Blocks;
    CampusLifeImage: Attribute.Media;
    CampusFacilitiesHeader: Attribute.String;
    CampusFacilitiesList: Attribute.Enumeration<
      ['libraries ', 'student union ', 'private sports', 'gym']
    >;
  };
}

export interface SharedMedia extends Schema.Component {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Attribute.Media;
  };
}

export interface SharedQuote extends Schema.Component {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    title: Attribute.String;
    body: Attribute.Text;
  };
}

export interface SharedRichText extends Schema.Component {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Attribute.RichText;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
    shareImage: Attribute.Media;
  };
}

export interface SharedSlider extends Schema.Component {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'enhancedprofilecomponents.component-1': EnhancedprofilecomponentsComponent1;
      'enhancedprofilecomponents.component-2': EnhancedprofilecomponentsComponent2;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
