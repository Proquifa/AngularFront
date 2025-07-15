export class Contact {
  /* Client provided identifier corresponding to this contact information. */
  private contactId;

  /* Identifies the contact person's name. */
  private personName;

  /* Identifies the contact person's title. */
  private title;

  /* Identifies the company this contact is associated with. */
  private companyName;

  /* Identifies the phone number associated with this contact. */
  private phoneNumber;

  /* Identifies the phone extension associated with this contact. */
  private phoneExtension;

  /* Identifies a toll free number, if any, associated with this
  * contact. */
  private tollFreePhoneNumber;

  /* Identifies the pager number associated with this contact. */
  private pagerNumber;

  /* Identifies the fax number associated with this contact. */
  private faxNumber;

  /* Identifies the email address associated with this contact. */
  private EMailAddress;


  ////Parametros para Address

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

  //  public Contact() {
  //  }

  public Contact(
    contactId,
    personName,
    title,
    companyName,
    phoneNumber,
    phoneExtension,
    tollFreePhoneNumber,
    pagerNumber,
    faxNumber,
    EMailAddress,


    ///parametros address 
    streetLines,
    city,
     stateOrProvinceCode,
    postalCode,
   urbanizationCode,
 countryCode,
    countryName,
     residential,
geographicCoordinates) {
 


    this.contactId = contactId;
    this.personName = personName;
    this.title = title;
    this.companyName = companyName;
    this.phoneNumber = phoneNumber;
    this.phoneExtension = phoneExtension;
    this.tollFreePhoneNumber = tollFreePhoneNumber;
    this.pagerNumber = pagerNumber;
    this.faxNumber = faxNumber;
    this.EMailAddress = EMailAddress;


    ///parametros address

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
   * Gets the contactId value for this Contact.
   *
   * @return contactId   * Client provided identifier corresponding to this contact information.
   */
  public getContactId(): String {
    return this.contactId;
  }

  /**
   * Sets the contactId value for this Contact.
   *
   * @param contactId   * Client provided identifier corresponding to this contact information.
   */
  public setContactId(contactId: String): void {
    this.contactId = contactId;
  }

  /**
   * Gets the personName value for this Contact.
   *
   * @return personName   * Identifies the contact person's name.
   */
  public getPersonName() {
    return this.personName;
  }

  /**
   * Sets the personName value for this Contact.
   *
   * @param personName   * Identifies the contact person's name.
   */
  public setPersonName(personName): void {
    this.personName = personName;
  }

  /**
   * Gets the title value for this Contact.
   *
   * @return title   * Identifies the contact person's title.
   */
  public getTitle(): String {
    return this.title;
  }

  /**
   * Sets the title value for this Contact.
   *
   * @param title   * Identifies the contact person's title.
   */
  public setTitle(title: String): void {
    this.title = title;
  }

  /**
   * Gets the companyName value for this Contact.
   *
   * @return companyName   * Identifies the company this contact is associated with.
   */
  public getCompanyName(): String {
    return this.companyName;
  }

  /**
   * Sets the companyName value for this Contact.
   *
   * @param companyName   * Identifies the company this contact is associated with.
   */
  public setCompanyName(companyName: String): void {
    this.companyName = companyName;
  }

  /**
   * Gets the phoneNumber value for this Contact.
   *
   * @return phoneNumber   * Identifies the phone number associated with this contact.
   */
  public getPhoneNumber(): String {
    return this.phoneNumber;
  }

  /**
   * Sets the phoneNumber value for this Contact.
   *
   * @param phoneNumber   * Identifies the phone number associated with this contact.
   */
  public setPhoneNumber(phoneNumber: String): void {
    this.phoneNumber = phoneNumber;
  }

  /**
   * Gets the phoneExtension value for this Contact.
   *
   * @return phoneExtension   * Identifies the phone extension associated with this contact.
   */
  public getPhoneExtension(): String {
    return this.phoneExtension;
  }

  /**
   * Sets the phoneExtension value for this Contact.
   *
   * @param phoneExtension   * Identifies the phone extension associated with this contact.
   */
  public setPhoneExtension(phoneExtension: String): void {
    this.phoneExtension = phoneExtension;
  }

  /**
   * Gets the tollFreePhoneNumber value for this Contact.
   *
   * @return tollFreePhoneNumber   * Identifies a toll free number, if any, associated with this
   * contact.
   */
  public getTollFreePhoneNumber(): String {
    return this.tollFreePhoneNumber;
  }

  /**
   * Sets the tollFreePhoneNumber value for this Contact.
   *
   * @param tollFreePhoneNumber   * Identifies a toll free number, if any, associated with this
   * contact.
   */
  public setTollFreePhoneNumber(tollFreePhoneNumber: String): void {
    this.tollFreePhoneNumber = tollFreePhoneNumber;
  }

  /**
   * Gets the pagerNumber value for this Contact.
   *
   * @return pagerNumber   * Identifies the pager number associated with this contact.
   */
  public getPagerNumber(): String {
    return this.pagerNumber;
  }

  /**
   * Sets the pagerNumber value for this Contact.
   *
   * @param pagerNumber   * Identifies the pager number associated with this contact.
   */
  public setPagerNumber(pagerNumber: String): void {
    this.pagerNumber = pagerNumber;
  }

  /**
   * Gets the faxNumber value for this Contact.
   *
   * @return faxNumber   * Identifies the fax number associated with this contact.
   */
  public getFaxNumber(): String {
    return this.faxNumber;
  }

  /**
   * Sets the faxNumber value for this Contact.
   *
   * @param faxNumber   * Identifies the fax number associated with this contact.
   */
  public setFaxNumber(faxNumber: String): void {
    this.faxNumber = faxNumber;
  }

  /**
   * Gets the EMailAddress value for this Contact.
   *
   * @return EMailAddress   * Identifies the email address associated with this contact.
   */
  public getEMailAddress(): String {
    return this.EMailAddress;
  }

  /**
   * Sets the EMailAddress value for this Contact.
   *
   * @param EMailAddress   * Identifies the email address associated with this contact.
   */
  public setEMailAddress(EMailAddres: String): void {
    this.EMailAddress = EMailAddres;
  }





  ////Parametros address

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
