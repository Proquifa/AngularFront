/**
 * Address.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */


/**
 * Descriptive data for a physical location. May be used as an actual
 * physical address (place to which one could go), or as a container
 * of "address parts" which should be handled as a unit (such as a city-state-ZIP
 * combination within the US).
 */
export class Address  {
    /* Combination of number, street name, etc. At least one line
     * is required for a valid physical address; empty lines should not be
     * included. */
    private  streetLines: String;

    /* Name of city, town, etc. */
    private  city: String;

    /* Identifying abbreviation for US state, Canada province, etc.
     * Format and presence of this field will vary, depending on country. */
    private  stateOrProvinceCode: String;

    /* Identification of a region (usually small) for mail/package
     * delivery. Format and presence of this field will vary, depending on
     * country. */
    private  postalCode: String;

    /* Relevant only to addresses in Puerto Rico. */
    private  urbanizationCode: String;

    /* The two-letter code used to identify a country. */
    private  countryCode: String;

    /* The fully spelt out name of a country. */
    private countryName: String ;

    /* Indicates whether this address residential (as opposed to commercial). */
    private  residential:Boolean;

    /* The geographic coordinates cooresponding to this address. */
    private  geographicCoordinates:String;

    // public Address() {
    // }

    public Address(
           streetLines,
           city,
            stateOrProvinceCode,
           postalCode,
          urbanizationCode,
        countryCode,
           countryName,
            residential,
      geographicCoordinates) {
           this.streetLines = streetLines;
           this.city = city;
           this.stateOrProvinceCode = stateOrProvinceCode;
           this.postalCode = postalCode;
           this.urbanizationCode = urbanizationCode;
           this.countryCode = countryCode;
           this.countryName = countryName;
           this.residential = residential;
           this.geographicCoordinates = geographicCoordinates;
    }


    /**
     * Gets the streetLines value for this Address.
     * 
     * @return streetLines   * Combination of number, street name, etc. At least one line
     * is required for a valid physical address; empty lines should not be
     * included.
     */
    public  getStreetLines(): String {
        return this.streetLines;
    }


    /**
     * Sets the streetLines value for this Address.
     * 
     * @param streetLines   * Combination of number, street name, etc. At least one line
     * is required for a valid physical address; empty lines should not be
     * included.
     */
    public setStreetLines( streetLines : String): void  {
        this.streetLines = streetLines;
    }

    // public getStreetLines( i :number): String  {
    //     return this.streetLines[i];
    // }

    // public void setStreetLines(int i, java.lang.String _value) {
    //     this.streetLines[i] = _value;
    // }


    /**
     * Gets the city value for this Address.
     * 
     * @return city   * Name of city, town, etc.
     */
    public  getCity() : String {
        return this.city;
    }


    /**
     * Sets the city value for this Address.
     * 
     * @param city   * Name of city, town, etc.
     */
    public setCity( city: String): void  {
        this.city = city;
    }


    /**
     * Gets the stateOrProvinceCode value for this Address.
     * 
     * @return stateOrProvinceCode   * Identifying abbreviation for US state, Canada province, etc.
     * Format and presence of this field will vary, depending on country.
     */
    public  getStateOrProvinceCode(): String {
        return this.stateOrProvinceCode;
    }


    /**
     * Sets the stateOrProvinceCode value for this Address.
     * 
     * @param stateOrProvinceCode   * Identifying abbreviation for US state, Canada province, etc.
     * Format and presence of this field will vary, depending on country.
     */
    public setStateOrProvinceCode( stateOrProvinceCode: String) : void  {
        this.stateOrProvinceCode = stateOrProvinceCode;
    }


    /**
     * Gets the postalCode value for this Address.
     * 
     * @return postalCode   * Identification of a region (usually small) for mail/package
     * delivery. Format and presence of this field will vary, depending on
     * country.
     */
    public  getPostalCode(): String {
        return this.postalCode;
    }


    /**
     * Sets the postalCode value for this Address.
     * 
     * @param postalCode   * Identification of a region (usually small) for mail/package
     * delivery. Format and presence of this field will vary, depending on
     * country.
     */
    public setPostalCode( postalCode: String) : void  {
        this.postalCode = postalCode;
    }


    /**
     * Gets the urbanizationCode value for this Address.
     * 
     * @return urbanizationCode   * Relevant only to addresses in Puerto Rico.
     */
    public  getUrbanizationCode() : String{
        return this.urbanizationCode;
    }


    /**
     * Sets the urbanizationCode value for this Address.
     * 
     * @param urbanizationCode   * Relevant only to addresses in Puerto Rico.
     */
    public  setUrbanizationCode( urbanizationCode: String): void{
        this.urbanizationCode = urbanizationCode;
    }


    /**
     * Gets the countryCode value for this Address.
     * 
     * @return countryCode   * The two-letter code used to identify a country.
     */
    public getCountryCode(): String  {
        return this.countryCode;
    }


    /**
     * Sets the countryCode value for this Address.
     * 
     * @param countryCode   * The two-letter code used to identify a country.
     */
    public setCountryCode( countryCode : String):  void  {
        this.countryCode = countryCode;
    }


    /**
     * Gets the countryName value for this Address.
     * 
     * @return countryName   * The fully spelt out name of a country.
     */
    public  getCountryName(): String {
        return this.countryName;
    }


    /**
     * Sets the countryName value for this Address.
     * 
     * @param countryName   * The fully spelt out name of a country.
     */
    public  setCountryName( countryName: String) : void {
        this.countryName = countryName;
    }


    /**
     * Gets the residential value for this Address.
     * 
     * @return residential   * Indicates whether this address residential (as opposed to commercial).
     */
    public  getResidential() : Boolean{
        return this.residential;
    }


    /**
     * Sets the residential value for this Address.
     * 
     * @param residential   * Indicates whether this address residential (as opposed to commercial).
     */
    public setResidential( residential: Boolean): void {
        this.residential = residential;
    }


    /**
     * Gets the geographicCoordinates value for this Address.
     * 
     * @return geographicCoordinates   * The geographic coordinates cooresponding to this address.
     */
    public  getGeographicCoordinates() :String {
        return this.geographicCoordinates;
    }


    /**
     * Sets the geographicCoordinates value for this Address.
     * 
     * @param geographicCoordinates   * The geographic coordinates cooresponding to this address.
     */
    public  setGeographicCoordinates( geographicCoordinates: String) : void{
        this.geographicCoordinates = geographicCoordinates;
    }

    

}
