/*
 * Copyright 2012 SURFnet bv, The Netherlands
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package nl.surfnet.coin.selfservice.domain;

import java.io.Serializable;
import java.util.Date;

/**
 * License (for software, SaaS, or other) that belongs to an institute, group of
 * individual. A license is typically retrieved from the LMNG.
 */
public class License implements Serializable {

  private static final long serialVersionUID = 1L;

  private Date startDate;
  private Date endDate;
  private String description;
  private String productName;
  private String identityName;
  private String contactFullName;
  private String contactEmail;
  private String supplierName;

  /**
   * Default constructor
   */
  public License() {
  }

  public Date getStartDate() {
    return startDate;
  }

  public void setStartDate(Date startDate) {
    this.startDate = startDate;
  }

  public Date getEndDate() {
    return endDate;
  }

  public void setEndDate(Date endDate) {
    this.endDate = endDate;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public String getProductName() {
    return productName;
  }

  public void setProductName(String productName) {
    this.productName = productName;
  }

  public String getIdentityName() {
    return identityName;
  }

  public void setIdentityName(String identityName) {
    this.identityName = identityName;
  }

  public String getContactFullName() {
    return contactFullName;
  }

  public void setContactFullName(String contactFullName) {
    this.contactFullName = contactFullName;
  }

  public String getContactEmail() {
    return contactEmail;
  }

  public void setContactEmail(String contactEmail) {
    this.contactEmail = contactEmail;
  }

  public String getSupplierName() {
    return supplierName;
  }

  public void setSupplierName(String supplierName) {
    this.supplierName = supplierName;
  }

}
