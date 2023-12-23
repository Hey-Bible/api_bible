/**
 * API.Bible
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.6.3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AudioBibleSummary } from '../models/AudioBibleSummary.ts';
import { BibleSummaryCountriesInner } from '../models/BibleSummaryCountriesInner.ts';
import { Language } from '../models/Language.ts';
import { HttpFile } from '../http/http.ts';

export class Bible {
    'id': string;
    'dblId': string;
    'abbreviation': string;
    'abbreviationLocal': string;
    'copyright': string;
    'language': Language;
    'countries': Array<BibleSummaryCountriesInner>;
    'name': string;
    'nameLocal': string;
    'description': string;
    'descriptionLocal': string;
    'info': string;
    'type': string;
    'updatedAt': Date;
    'relatedDbl': string;
    'audioBibles': Array<AudioBibleSummary>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "dblId",
            "baseName": "dblId",
            "type": "string",
            "format": ""
        },
        {
            "name": "abbreviation",
            "baseName": "abbreviation",
            "type": "string",
            "format": ""
        },
        {
            "name": "abbreviationLocal",
            "baseName": "abbreviationLocal",
            "type": "string",
            "format": ""
        },
        {
            "name": "copyright",
            "baseName": "copyright",
            "type": "string",
            "format": ""
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "Language",
            "format": ""
        },
        {
            "name": "countries",
            "baseName": "countries",
            "type": "Array<BibleSummaryCountriesInner>",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "nameLocal",
            "baseName": "nameLocal",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "descriptionLocal",
            "baseName": "descriptionLocal",
            "type": "string",
            "format": ""
        },
        {
            "name": "info",
            "baseName": "info",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "relatedDbl",
            "baseName": "relatedDbl",
            "type": "string",
            "format": ""
        },
        {
            "name": "audioBibles",
            "baseName": "audioBibles",
            "type": "Array<AudioBibleSummary>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Bible.attributeTypeMap;
    }

    public constructor() {
    }
}

