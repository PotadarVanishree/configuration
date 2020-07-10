package com.afcdpt.conversion.gxmodel.database
/**
 * Created with IntelliJ IDEA.
 * User: DELL
 * Date: 7/10/20
 * Time: 7:15 PM
 * To change this template use File | Settings | File Templates.
 */
class AFCQueryManager {
  //query to check account control table for accounts to be converted

  public static final var querySelectAccNumsToGenPayload: String = "SELECT AccountNumber FROM tabl_accountcontrol WHERE ConvertedDate IS NULL ORDER BY RequestDate"

  //query to select all legacy data fields from a single view
  public  static  final var querySelectLegacyAccountData: String = " SELECT * FROM view_LegacyAccountData WHERE AC_ACCNUM = ?"


}